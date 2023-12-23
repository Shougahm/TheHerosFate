import { spells } from "./spells.mjs";

function roll(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function PWR(pwr) {
	let a = Math.trunc(pwr / 4);

	if (a == 0) {
		a = ""
	} else if (a == 1) {
		a = "d8";
	} else {
		a = a + "d8";
	}

	let b = (pwr % 4) * 2;

	if (b == 0) {
		b = "";
	} else if (b > 0) {
		b = "d" + b;
	}

	if (a && b) {
		a += "+";
	}

	return a + b;
}

function check() {
	return (roll(1, 12) - roll(1, 12))
}

class Character {
	constructor() {
		this.strength = 4;
		this.dexterity = 4;
		this.intellect = 4;
		this.body = null;
		this.will = null;
		this.agility = null;
		this.focus = null;

		this.initiativeRoll = null;
		this.initiative = null;

		this.acuityLvl1 = 0;
		this.empathyLvl1 = 0;
		this.evokeLvl1 = 0;
		this.guileLvl1 = 0;
		this.cultureLvl1 = 0;
		this.craftsLvl1 = 0;
		this.natureLvl1 = 0;
		this.mageryLvl1 = 0;
		this.graceLvl1 = 0;
		this.fitnessLvl1 = 0;

		this.acuityLvl2 = 0;
		this.empathyLvl2 = 0;
		this.evokeLvl2 = 0;
		this.guileLvl2 = 0;
		this.cultureLvl2 = 0;
		this.craftsLvl2 = 0;
		this.natureLvl2 = 0;
		this.mageryLvl2 = 0;
		this.graceLvl2 = 0;
		this.fitnessLvl2 = 0;

		this.head = null;
		this.armor = null;
		this.offhandType = null;
		this.offhand = 0;

		this.poleHandle = false;
		this.thrown = false;
		this.finess = false;
		this.twoHanded = false;

		this.offPrep = null;
		this.defPrep = null;
		this.agiPrep = null;

		this.offense = null;
		this.defense = null;
		this.experience = null;
		this.trauma = null;
		this.acuity = null;
		this.empathy = null;
		this.evoke = null;
		this.guile = null;
		this.culture = null;
		this.crafts = null;
		this.nature = null;
		this.magery = null;
		this.grace = null;
		this.fitness = null;

		this.burden = 0;
	}

	figureStats() {
		let acuityLvl  = this.acuityLvl1  + this.acuityLvl2;
		let empathyLvl = this.empathyLvl1 + this.empathyLvl2;
		let evokeLvl   = this.evokeLvl1   + this.evokeLvl2;
		let guileLvl   = this.guileLvl1   + this.guileLvl2;
		let cultureLvl = this.cultureLvl1 + this.cultureLvl2;
		let craftsLvl  = this.craftsLvl1  + this.craftsLvl2;
		let natureLvl  = this.natureLvl1  + this.natureLvl2;
		let mageryLvl  = this.mageryLvl1  + this.mageryLvl2;
		let graceLvl   = this.graceLvl1   + this.graceLvl2;
		let fitnessLvl = this.fitnessLvl1 + this.fitnessLvl2;

		let experience = this.intellect - totalSkills()

		function totalSkills() {
			let r =
				acuityLvl +
				empathyLvl +
				evokeLvl +
				guileLvl +
				cultureLvl +
				craftsLvl +
				natureLvl +
				mageryLvl +
				graceLvl +
				fitnessLvl

			return r
		}

		let load = this.head +
			+ this.armor
			+ this.offhand;

		if (this.poleHandle)
			load+=1
		if (this.thrown)
			load+=1
		if (this.finess)
			load+=1
		if (this.twoHanded)
			load -= Math.floor(this.strength/3)

		let liberty
		this.burden = this.strength - load;
		this.pwr = PWR(this.head);

		let _off = this.dexterity;
		let _def = this.dexterity;

		let prepCost = (this.offPrep + this.defPrep + this.agiPrep) * 3
		this.initiative = this.initiativeRoll - prepCost;

		this.body = this.strength * 2;
		this.will = this.strength + this.intellect;
		this.agility = this.strength + this.dexterity + this.burden + this.agiPrep;
		this.focus = this.dexterity + this.intellect + experience;
		this.experience = experience;
		this.trauma = experience;
		this.acuity = Math.ceil(acuityLvl / 2 * this.intellect);
		this.empathy = Math.ceil(empathyLvl / 2 * this.intellect);
		this.evoke = Math.ceil(evokeLvl / 2 * this.intellect);
		this.guile = Math.ceil(guileLvl / 2 * this.intellect);
		this.culture = Math.ceil(cultureLvl / 2 * this.intellect);
		this.crafts = Math.ceil(craftsLvl / 2 * this.intellect);
		this.nature = Math.ceil(natureLvl / 2 * this.intellect);
		this.magery = Math.ceil(mageryLvl / 2 * this.intellect);
		this.grace = Math.ceil(graceLvl / 2 * this.dexterity);
		this.fitness = Math.ceil(fitnessLvl / 2 * this.strength);

		let offensiveEquipBonus = 0
		let defensiveEquipBonus = 0
		if (this.offhandType == "Shield") {
			defensiveEquipBonus = this.offhand;
		} else if (this.offhandType == "Weapon") {
			offensiveEquipBonus = this.offhand;
		}

		let advantagedOffPreps = Math.min(offensiveEquipBonus, this.offPrep)
		let regularOffPreps = (this.offPrep) - advantagedOffPreps
		let equipmentOffBonus = advantagedOffPreps * Math.floor(this.dexterity / 2) + regularOffPreps;
		this.offense = _off + equipmentOffBonus;

		let advantagedDefPreps = Math.min(defensiveEquipBonus, this.defPrep)
		let regularDefPreps = this.defPrep - advantagedDefPreps
		let equipmentDefBonus = advantagedDefPreps * Math.floor(this.dexterity / 2) + regularDefPreps;
		this.defense = _def + equipmentDefBonus;
	}

	rollInitiative() {
		this.initiativeRoll = check() + this.focus;
		this.offPrep = null;
		this.defPrep = null;
		this.agiPrep = null;
		this.figureStats()
	}
}

class App {
	constructor() {
		this.character = new Character();
		this.spells = spells;
	}
}


async function main() {
	await Component("Character");
	await Component("Spell");

	Vue.component("number-checkbox", {
		props: ['value'],
		emits: ['update:value'],
		mounted() { this.$el.checked = this.$props.value != 0; },
		template: `<input type="checkbox" v-bind:value="value" v-on:input="$emit('input', $event.target.checked ? 1 : 0), $emit('change')">`
	});

	Vue.component("number-input", {
		template: `<input maxlength='2' v-bind:value="value" v-on:input="$emit('input', Number($event.target.value))" @keypress="requireNumber($event)">`,
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

main();