export class Socket {
    static socket = null;
    static port = 3334;
    static listeners = new Map();

    static async connect() {
        return new Promise((accept, reject) => {
            this.socket = new WebSocket(`ws://${location.hostname}:${this.port}/`);
            this.socket.onopen = accept;
            this.socket.onmessage = message => {
                let { msg, arg } = JSON.parse(message.data)
                this.notifyListeners(msg, arg);
            };
            this.socket.onerror = e => {
                reject(e);
                this.notifyListeners('socketerror', e);
                location.reload();
            };
        });
    }

    static async send(msg, arg) {
        if (this.socket == null || this.socket.readyState !== WebSocket.OPEN) {
            try {
                await this.connect();
            } catch(e) {
                return false;
            }
        }
        this.socket.send(JSON.stringify({ msg, arg }));
        return true;
    }

    static addListener(msg, callback) {
        if (!this.listeners.has(msg)) {
            this.listeners.set(msg, [])
        }
        this.listeners.get(msg).push(callback)
    }

    static async notifyListeners(msg, arg) {
        if (this.listeners.has(msg)) {
            for (let listener of this.listeners.get(msg)) {
                listener(arg);
            }
        }
    }
}