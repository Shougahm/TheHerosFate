import { PWR, check } from "./dice.mjs";

export class Character {
	constructor(name) {
        this.name = name;

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

		this.experience = null;

		this.head = null;
		this.armor = null;
		this.offhandType = null;
		this.offhand = 0;

		this.poleHandle = 0;
		this.thrown = 0;
		this.finesse = 0;
		this.twoHanded = false;

		this.offPrep = null;
		this.defPrep = null;
		this.agiPrep = null;

		this.offense = null;
		this.defense = null;
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

		this.burden = null;
		this.liberty = null;
		this.trauma = null;
		this.clarity = null;

		this.wounds = [];
		this.stuns = [];
	}
	addWound(wound) {
		this.wounds.push(Number(wound));
		this.figureStats();
	}
	removeWound(woundIndex) {
		this.wounds.splice(woundIndex, 1);
		this.figureStats();
	}
	get damage() {
		let damage = 0;
		for (let wound of this.wounds) {
			damage += wound;
		}
		return damage;
	}
	addStun(stun) {
		this.stuns.push(Number(stun));
		this.figureStats();
	}
	removeStun(stunIndex) {
		this.stuns.splice(stunIndex, 1);
		this.figureStats();
	}
	get bramage() {
		let bramage = 0;
		for (let stun of this.stuns) {
			bramage += stun;
		}
		return bramage;
	}

	figureStats() {
		this.body = this.strength * 2 - this.damage;
		this.will = this.strength + this.intellect - this.damage - this.bramage;

		let acuityLvl = this.acuityLvl1 + this.acuityLvl2;
		let empathyLvl = this.empathyLvl1 + this.empathyLvl2;
		let evokeLvl = this.evokeLvl1 + this.evokeLvl2;
		let guileLvl = this.guileLvl1 + this.guileLvl2;
		let cultureLvl = this.cultureLvl1 + this.cultureLvl2;
		let craftsLvl = this.craftsLvl1 + this.craftsLvl2;
		let natureLvl = this.natureLvl1 + this.natureLvl2;
		let mageryLvl = this.mageryLvl1 + this.mageryLvl2;
		let graceLvl = this.graceLvl1 + this.graceLvl2;
		let fitnessLvl = this.fitnessLvl1 + this.fitnessLvl2;

		this.experience = 
				acuityLvl +
				empathyLvl +
				evokeLvl +
				guileLvl +
				cultureLvl +
				craftsLvl +
				natureLvl +
				mageryLvl +
				graceLvl +
				fitnessLvl;
		if (this.will < 0) {
			this.experience = this.experience - this.will
		}
		this.trauma = null;
		this.clarity = null;
		if (this.intellect > this.experience)
			this.clarity = this.intellect - this.experience;
		else if (this.intellect < this.experience)
			this.trauma = this.experience - this.intellect;
		if (this.will < 0) {
				this.experience = this.experience + this.will
		}

		let load = this.head +
			+this.armor
			+ this.offhand
			+ this.poleHandle
			+ this.thrown
			+ this.finesse;

		if (this.twoHanded) {
			load -= Math.floor(this.strength / 4);
		}
		if (this.body < 0) {
			load = load - this.body
		}

		this.burden = null;
		this.liberty = null;
		if (this.strength > load)
			this.liberty = this.strength - load;
		else if (this.strength < load)
			this.burden = load - this.strength;

		
		this.pwr = PWR(this.head);

		let _off = this.dexterity - this.burden;
		let _def = this.dexterity - this.burden;

		let prepCost = (this.offPrep + this.defPrep + this.agiPrep) * 3;
		this.initiative = this.initiativeRoll - prepCost;

		
		this.agility = this.strength + this.dexterity - this.burden + this.liberty + this.agiPrep;
		this.focus = this.dexterity + this.intellect - this.trauma + this.clarity;
		this.acuity = Math.ceil(acuityLvl / 2 * this.intellect - this.trauma / 2);
		this.empathy = Math.ceil(empathyLvl / 2 * this.intellect - this.trauma / 2);
		this.evoke = Math.ceil(evokeLvl / 2 * this.intellect - this.trauma / 2);
		this.guile = Math.ceil(guileLvl / 2 * this.intellect - this.trauma / 2);
		this.culture = Math.ceil(cultureLvl / 2 * this.intellect - this.trauma / 2);
		this.crafts = Math.ceil(craftsLvl / 2 * this.intellect - this.trauma / 2);
		this.nature = Math.ceil(natureLvl / 2 * this.intellect - this.trauma / 2);
		this.magery = Math.ceil(mageryLvl / 2 * this.intellect - this.trauma / 2);
		this.grace = Math.ceil(graceLvl / 2 * this.dexterity);
		this.fitness = Math.ceil(fitnessLvl / 2 * this.strength);

		let offensiveEquipBonus = 0;
		let defensiveEquipBonus = 0;
		if (this.offhandType == "Shield") {
			defensiveEquipBonus = this.offhand;
		} else if (this.offhandType == "Weapon") {
			offensiveEquipBonus = this.offhand;
		}
//TODO Fix sell rates so that you get better sell rates for having offhand wep and dex.
//TODO Perhaps two handing should be agilityEquipBonus, it's an interesting concept.
		let advantagedOffPreps = Math.min(offensiveEquipBonus, this.offPrep);
		let regularOffPreps = (this.offPrep) - advantagedOffPreps;
		let equipmentOffBonus = advantagedOffPreps * Math.floor(this.dexterity / 2) + regularOffPreps;
		//if (this.offPrep+this.offhand < 0)
		//this.offense = _off + (this.offPrep+this.offhand);
		//else if (this.offPrep > 0)
		this.offense = _off + equipmentOffBonus;

		let advantagedDefPreps = Math.min(defensiveEquipBonus, this.defPrep);
		let regularDefPreps = this.defPrep - advantagedDefPreps;
		let equipmentDefBonus = advantagedDefPreps * Math.floor(this.dexterity / 2) + regularDefPreps;
		this.defense = _def + equipmentDefBonus;
	}

	rollInitiative() {
		this.initiativeRoll = check() + this.focus;
		this.offPrep = null;
		this.defPrep = null;
		this.agiPrep = null;
		this.figureStats();
	}
}
