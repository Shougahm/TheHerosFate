const express = require('express');
const http = require('http');
const websocket = require('websocket');
const base64 = require('js-base64');

class Character {
    constructor(playerId, source) {
        this.playerId = playerId;
        this.update(source);
    }

    update(source) {
        this.name = source.name;
        this.initiative = source.initiative;
        this.isReady = source.isReady;
    }
}

class Room {
    constructor(roomNumber, ownerId) {
        this.ownerId = ownerId;
        this.roomNumber = roomNumber;
        this.characters = [];
        this.abandonedTime = null;
        this.frozenCharacters = null;
    }

    get hasOwner() {
        return this.characters.some(c => c.playerId == this.ownerId);
    }

    join(playerId, characters) {
        this.leave(playerId);
        let playersCharactersByName = new Map(this.characters
                .filter(c => c.playerId == playerId)
                .map(c => [c.name, c]));
        for (let character of characters) {
            let existingCharacter = playersCharactersByName.get(character.name);
            if (existingCharacter) {
                existingCharacter.update(character);
            } else {
                this.characters.push(new Character(playerId, character));
            }
        }
    }

    leave(playerId) {
        this.characters = this.characters.filter(c => c.playerId != playerId);
    }

    checkReveal() {
        if (this.frozenCharacters == null
            && this.characters.every(character => character.isReady)) {
            this.frozenCharacters = JSON.parse(JSON.stringify(this.characters));
        }
    }

    resetRound() {
        this.frozenCharacters = null;
        for (let character of this.characters) {
            character.isReady = false;
        }
    }

    toString() {
        let buffer = [`Room ${this.roomNumber}`];
        buffer.push(this.character.map(u => `${u.playerId}${u.playerId == this.ownerId ? '(o)' : ''}`).join(', '));
        return buffer.join(';');
    }
}

let g_rooms = [];
const g_roomsByClient = new Map(); // map websockets to rooms
let g_nextRoomId = 1;

// periodically check for orphaned rooms or players
setInterval(() => {
    const now = Date.now();

    // mark any room which has no client attached as abandoned
    let liveRooms = new Set(g_roomsByClient.values());
    for (let room of g_rooms) {
        if (liveRooms.has(room)) {
            room.abandonedTime = null;
        } else if (room.abandonedTime == null) {
            room.abandonedTime = now;
        }
    }

    // nuke rooms that have been abandoned for a while
    g_rooms = g_rooms.filter(room => room.abandonedTime == null || now - room.abandonedTime < 3000);

    // boot players from rooms if the player has no client attached
    let livePlayerIds = new Set(Array.from(g_roomsByClient.keys()).map(client => client.id));
    for (let room of g_rooms) {
        let deadPlayers = room.characters.filter(character => !livePlayerIds.has(character.playerId));
        if (deadPlayers.length > 0) {
            for (let player of deadPlayers) {
                room.leave(player.id);
            }
            onRoomUpdated(room);
        }
    }
}, 1000);

function sendMsg(client, msg, arg) {
    client.sendUTF(JSON.stringify({ msg, arg }));
}

function sendRoomMsg(room, msg, arg) {
    for (let [client, clientRoom] of g_roomsByClient) {
        if (room == clientRoom && room.roomNumber == clientRoom.roomNumber) {
            sendMsg(client, msg, arg);
        }
    }
}

function onRoomUpdated(room) {
    sendRoomMsg(room, 'roomupdated', room);
}

function onRoundReset(room) {
    sendRoomMsg(room, 'roundreset', room);
}

function getRoomOrDie(roomNumber, checkOrphanedRoom) {
    let room = g_rooms.find(room => room.roomNumber == roomNumber);
    if (room == null) {
        throw new Error(`Room ${roomNumber} not found.`);
    }
    if (checkOrphanedRoom && !room.hasOwner) {
        g_rooms.splice(g_rooms.indexOf(room), 1); // bye bye, room!
        throw new Error(`Room closed by owner.`);
    }
    return room;
}

function getRoomByClientOrDie(client) {
    let room = g_roomsByClient.get(client);
    if (room == null) {
        throw new Error(`Room ${room} not found.`);
    }
    return room;
}

function createRoom(client, args) {
    let room = new Room(g_nextRoomId/*++*/, client.id);
    g_rooms.push(room);
    joinRoom(client, args);
}

function joinRoom(client, args) {
    let { roomNumber, characters } = args;

    let room = g_rooms.find(room => room.roomNumber == roomNumber);
    if (room == null) {
        createRoom(client, args);
        return;
    }
    // only the previous owner can join ownerless room (allows owner to refresh the page)
    if (!room.hasOwner && client.id != room.ownerId) {
        throw new Error(`Room ${roomNumber} not found.`);
    }
    g_roomsByClient.set(client, room);
    room.join(client.id, characters);
    onRoomUpdated(room);
}

function leaveRoom(client, roomNumber) {
    let room = g_rooms.find(room => room.roomNumber == roomNumber);
    if (room != null) {
        room.leave(client.id);
        g_roomsByClient.set(client, null);
        onRoomUpdated(room);
    }
}

function resetRound(client) {
    let room = getRoomByClientOrDie(client);
    room.resetRound();
    onRoundReset(room);
    onRoomUpdated(room);
}

function updateCharacter(client, source) {
    let room = getRoomByClientOrDie(client);
    let character = room.characters.find(char => char.playerId == client.id
         && char.name == source.name);
    if (character == null) {
        throw new Error('Character not found.');
    }
    character.update(source);
    room.checkReveal();
    onRoomUpdated(room);
}

function debug(client) {
    let formatClient = client => `${client.id}`;
    let msg = `me: ${formatClient(client)}\n\n`
      + `g_clients \n\t${[...g_roomsByClient.keys()].map(formatClient).join('\n\t')}\n\n`
      + `g_rooms \n\t${g_rooms.map(r => r.toString()).join('\n\t')}\n`;
    console.log(msg);
    sendMsg(client, "console", msg);
}

function getCookie(request, name) {
    let cookie = request.cookies.find(cookie => cookie.name === name);
    return cookie ? base64.decode(cookie.value) : null;
}

// websocket server
const socketServer = http.createServer();
socketServer.listen(3001);
const wsServer = new websocket.server({ httpServer: socketServer });
wsServer.on('request', request => {
    const client = request.accept(null, request.origin);
    client.id = getCookie(request, 'playerid');
    if (client.id == null) {
        sendMsg(client, 'message', 'Server error: received bad connection request! Missing playerid cookie.');
        return;
    }
    g_roomsByClient.set(client, null);
    client.on('message', message => {
        try {
            let { msg, arg } = JSON.parse(message.utf8Data);
            console.log('message:', msg);
            switch (msg) {
                case 'createroom':        createRoom(client);             break;
                case 'joinroom':          joinRoom(client, arg);          break;
                case 'leaveroom':         leaveRoom(client, arg);         break;
                case 'updatecharacter':   updateCharacter(client, arg);   break;
                case 'resetround':        resetRound(client, arg);        break;
                case 'debug':             debug(client);                  break;
            }
        } catch (e) {
            console.log('Error: ', e);
            sendMsg(client, 'message', 'Server error: ' + (e.message || e));
        }
    });
    client.on('close', () => {
        g_roomsByClient.delete(client);
    });
});

// file server
const app = express();
app.use(express.static('.'));
let server = app.listen(3000, err => {
    if (err) throw err;
    let address = server.address();
    console.log("The Hero's Fate server started at http://%s:%s", address.address, address.port);
});