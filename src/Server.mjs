import { getCookie, createUID } from "./util.mjs";
import { Socket } from "./Socket.mjs";
import { Room } from "./Room.mjs";

export class Server {
    constructor() {
        this.room = null;
        this.message = null;
        this.playerId = getCookie('playerid', () => createUID());
        this.onRoundReset = null;

        Socket.addListener("roundreset", () => this.onRoundReset?.());
        Socket.addListener("roomupdated", room => this.room = new Room(this.playerId, room));
        Socket.addListener("message", message => this.onServerMessage(message));
        Socket.addListener("console", message => console.log(message));
        window.addEventListener('beforeunload', () => this.leaveRoom());
    }
    onServerMessage(message) {
        this.room = null;
        this.message = message;
        setTimeout(() => this.message = null, 2000);
    }
    createRoom() {
        Socket.send("createroom");
    }
    joinRoom(characters) {
        //XXX? this.room = null;
        return Socket.send("joinroom", {
			roomNumber: 1,
			characters,
		});
    }
    leaveRoom() {
        if (this.room != null) {
            Socket.send("leaveroom", this.room.roomNumber);
            this.room = null;
        }
    }
    updateCharacter(character) {
        Socket.send("updatecharacter", character);
    }
    debug(e) {
        if (e.shiftKey && e.altKey && e.ctrlKey) {
            Socket.send("debug");
        }
    }
}

export let server = new Server();