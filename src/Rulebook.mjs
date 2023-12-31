import { actions } from "./actions.mjs";

export class Rulebook {
    constructor() {
        this.actions = actions;
        this.isOpen = false;
    }

    open() {
        this.isOpen = true;
    }

    close() {
        this.isOpen = false;
    }
}