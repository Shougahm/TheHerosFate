import { server } from "./Server.mjs";

export class Room {
    constructor(playerId, source) {
        this.playerId = playerId;
        this.ownerId = source.ownerId;
        this.roomNumber = source.roomNumber;
        this.frozenCharacters = this.sortByInitiative(source.frozenCharacters);
        this.characters = this.sortByName(source.characters);
        this.me = source.characters.find(c => c.playerId == this.playerId);
        this.isGM = document.location.hash.includes("gm");
    }
    get isOwner() {
        return this.playerId == this.ownerId;
    }
    get canReset() {
        return this.frozenCharacters || this.characters.some(u => u.initiative);
    }
    get canReveal() {
        return !this.frozenCharacters && this.characters.length > 0;
    }
    get votingEnabled() {
        return !this.frozenCharacters;
    }
    get initiatives() {
        return this.frozenCharacters || this.characters;
    }
    reset() {
        server.resetRound();
    }
    sortByName(characters) {
        if (characters) {
            return characters.sort((a,b) => (a.name || a.id).localeCompare(b.name || b.id));
        }
    }
    sortByInitiative(characters) {
        if (characters) {
            return characters.sort((a,b) => b.initiative - a.initiative);
        }
    }
}
