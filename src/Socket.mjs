import { ServerHost } from "./config.mjs";

export class Socket {
    static socket = null;
    static port = 3001;
    static listeners = new Map();

    static async connect() {
        return new Promise(accept => {
            this.socket = new WebSocket(`ws://${ServerHost}:${this.port}/`);
            this.socket.onopen = accept;
            this.socket.onmessage = message => {
                let { msg, arg } = JSON.parse(message.data)
                if (this.listeners.has(msg)) {
                    for (let listener of this.listeners.get(msg)) {
                        listener(arg);
                    }
                }
            };
            this.socket.onerror = e => {
                alert("Error communicating with server. Reloading.");
                location.reload();
            };
        });
    }

    static async send(msg, arg) {
        if (this.socket == null || this.socket.readyState !== WebSocket.OPEN) {
            await this.connect();
        }
        this.socket.send(JSON.stringify({ msg, arg }));
    }

    static addListener(msg, callback) {
        if (!this.listeners.has(msg)) {
            this.listeners.set(msg, [])
        }
        this.listeners.get(msg).push(callback)
    }
}