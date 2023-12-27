import { spells } from "./spells.mjs";
import { actions } from "./actions.mjs";
import { Character } from "./Character.mjs";

class App {
	constructor() {
		this.spells = spells;
		this.actions = actions;
		this.character = new Character();
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