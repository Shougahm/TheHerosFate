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
        Socket.addListener("socketerror", message => console.log('socket error', message));
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
    async joinRoom(characters) {
        if (Socket.send("joinroom", {
			roomNumber: 1,
			characters,
		})) {
            setInterval(() => Socket.send("keepalive"), 1000);
        }
    }
    leaveRoom() {
        if (this.room != null) {
            Socket.send("leaveroom", this.room.roomNumber);
            this.room = null;
        }
    }
    addCharacter(character) {
        Socket.send("addcharacter", character);
    }
    deleteCharacter(character) {
        Socket.send("deletecharacter", character);
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