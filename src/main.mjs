import { spells } from "./spells.mjs";
import { actions } from "./actions.mjs";
import { Character } from "./character.mjs";

class App {
	constructor() {
		this.spells = spells;
		this.actions = actions;

		this.load();
		if (this.characters == null) {
			this.createNewCharacter();
		}
		this.selectedCharacter = this.characters[0];

		window.onbeforeunload = () => this.save();
	}

	createNewCharacter() {
		let name = prompt("Character Name");
		this.characters.push(new Character(name));
	}

	deleteCharacter(character) {
		if (confirm(`Delete ${character.name} forever?`)) {
			this.characters.splice(this.characters.indexOf(character), 1);
		}
	}

	save() {
		localStorage.setItem("characters", JSON.stringify(this.characters));
	}

	load() {
		const savedCharacters = localStorage.getItem("characters");
		if (savedCharacters) {
			this.characters = JSON.parse(savedCharacters)
				.map(saveCharacter => Object.assign(new Character(), saveCharacter));
		}
	}
}

window.onload = async () => {
	await Component("Character");
	await Component("Spell");

	Vue.component("number-checkbox", {
		props: ['value'],
		emits: ['update:value'],
		mounted() { this.$el.checked = this.$props.value != 0; },
		template: `<input type="checkbox" v-bind:value="value" v-on:input="$emit('input', $event.target.checked ? 1 : 0), $emit('change')">`
	});

	Vue.component("number-input", {
		template: `<input type="number" maxlength='2' v-bind:value="value" v-on:input="$emit('input', Number($event.target.value))" @keypress="requireNumber($event)">`,
		props: ['value'],
		emits: ['update:value'],
		methods: {
			requireNumber (e) {
				let code = (typeof e.which == "number") ? e.which : e.keyCode
				if (code < 48 || code > 57) {
					e.preventDefault();
				}
			},
		},
	});

	bootstrap(new App());
}