import { SpellList } from "./SpellList.mjs";
import { Rulebook } from "./Rulebook.mjs";
import { Character } from "./character.mjs";
import { server } from "./Server.mjs";
import { serialize, deserialize } from "./util.mjs";

export class App {
	static instance = new App();

	constructor() {
		this.spellList = new SpellList();
		this.rulebook = new Rulebook();

		this.loadCharacters();
		this.selectCharacter(this.characters[0]);

        document.body.onbeforeunload = () => this.onbeforeunload();

		this.server = server;
		server.joinRoom(this.characters);
		server.onRoundReset = () => this.resetRound();
	}

	onbeforeunload() {
		server.leaveRoom();
        this.saveCharacters();
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
			this.selectedCharacter = new Character(name, this);
			this.selectCharacter(new Character(name));
			this.characters.push(this.selectedCharacter);
			server.addCharacter(this.selectedCharacter);
		}
	}

	editName(character) {
		character.editName();
	}

	deleteCharacter(character) {
		if (confirm(`Delete ${character.name} forever?`)) {
			this.characters.splice(this.characters.indexOf(character), 1);
			server.deleteCharacter(character);
			this.selectedCharacter = this.characters[0];
		}
	}

	saveCharacters() {
		let serialized = serialize(this.characters, (key, value) => value == this);
		console.log("saveCharacters:", serialized);
		localStorage.setItem("characters", serialized);
	}

	loadCharacters() {
		const savedCharacters = localStorage.getItem("characters");
		if (savedCharacters) {
			try {
				this.characters = deserialize(savedCharacters)
					.map(saveCharacter => Object.assign(new Character(null, this), saveCharacter));
			} catch (e) { 
				console.log(e);
			}
		}

		if (this.characters == null) {
			this.characters = [];
		}
	}
}