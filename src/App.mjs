import { SpellList } from "./SpellList.mjs";
import { Rulebook } from "./Rulebook.mjs";
import { Character } from "./character.mjs";
import { server } from "./Server.mjs";
import { serialize, deserialize } from "./util.mjs";

export class App {
	constructor() {
		this.spellList = new SpellList();
		this.rulebook = new Rulebook();

		this.loadCharacters();
		this.selectCharacter(this.characters[0]);

		window.onbeforeunload = () => this.saveCharacters();

		this.server = server;
		server.joinRoom(this.characters);
		server.onRoundReset = () => this.resetRound();
	}

	selectCharacter(character) {
		this.selectedCharacter = character;
		this.spellList.character = character;
	}

	resetRound() {
		for (let character of this.characters) {
			character.resetRound();
		}
	}

	createNewCharacter(defaultName) {
		let name = prompt("Character Name") || defaultName;
		if (name) {
			this.selectCharacter(new Character(name));
			this.characters.push(this.selectedCharacter);
			server.addCharacter(this.selectedCharacter);
		}
	}

	editName(character) {
		let name = prompt("Character Name", character.name);
		if (name) {
			character.name = name;
			server.updateCharacter(character);
			// HACK
			//location.reload();
		}
	}

	deleteCharacter(character) {
		if (confirm(`Delete ${character.name} forever?`)) {
			this.characters.splice(this.characters.indexOf(character), 1);
			server.deleteCharacter(character);
		}
	}

	saveCharacters() {
		console.log("saveCharacters:", serialize(this.characters));
		localStorage.setItem("characters", serialize(this.characters));
	}

	loadCharacters() {
		const savedCharacters = localStorage.getItem("characters");
		if (savedCharacters) {
			this.characters = deserialize(savedCharacters)
				.map(saveCharacter => Object.assign(new Character(), saveCharacter));
		} else {
			this.characters = [];
		}
	}
}