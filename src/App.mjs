import { SpellList } from "./SpellList.mjs";
import { Character } from "./character.mjs";
import { server } from "./Server.mjs";

export class App {
	constructor() {
		this.spellList = new SpellList();

		this.loadCharacters();
		if (this.characters == null) {
			this.characters = [];
			this.createNewCharacter();
		}
		this.selectedCharacter = this.characters[0];

		window.onbeforeunload = () => this.saveCharacters();

		this.server = server;
		server.joinRoom(this.characters);
		server.onRoundReset = () => this.resetRound();
	}

	resetRound() {
		for (let character of this.characters) {
			character.resetRound();
		}
	}

	createNewCharacter() {
		let name = prompt("Character Name");
		if (name) {
			this.selectedCharacter = new Character(name);
			this.characters.push(this.selectedCharacter);
		}
	}

	editName(character) {
		let name = prompt("Character Name", character.name);
		if (name) {
			character.name = name;
			server.updateCharacter(character);
		}
	}

	deleteCharacter(character) {
		if (confirm(`Delete ${character.name} forever?`)) {
			this.characters.splice(this.characters.indexOf(character), 1);
		}
	}

	saveCharacters() {
		localStorage.setItem("characters", JSON.stringify(this.characters));
	}

	loadCharacters() {
		const savedCharacters = localStorage.getItem("characters");
		if (savedCharacters) {
			this.characters = JSON.parse(savedCharacters)
				.map(saveCharacter => Object.assign(new Character(), saveCharacter));
		}
	}
}