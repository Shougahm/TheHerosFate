let _init
let _off
let _def

function getNumber (id) {
	let e = document.getElementById(id)
    if (e.type == "checkbox"){
		return e.checked ? 1 : 0
	} else if (e.tagName == "INPUT"){
		return Number(e.value)
	} else {
		return Number(e.innerText)
	}
}

function setValue(id, value) {
	let e = document.getElementById(id)
    if (e.tagName == "INPUT") {
        e.value = value;
    } else {
        e.innerText = value;
    }
}

function roll(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
function PWR(pwr) {
	let a=Math.trunc(pwr/4)
	if (a==0){a=""}
	else if (a==1){a="d8"}
	else {a=a+"d8"}
	
	let b=(pwr%4)*2
	if (b==0){b=""}
	else if (b>0){b="d"+b}
	
	if (a && b) {a+="+"}
		
	return a+b
}

function figureStats(){
	let strength=getNumber("STR") || 0
	let dexterity=getNumber("DEX") || 0
	let intellect=getNumber("INT") || 0
	let body=getNumber("Body") || 0
	let will=getNumber("Will") || 0
	let agility=getNumber("Agility") || 0
	let focus=getNumber("Focus") || 0
	let trauma=getNumber("Trauma") || 0
	
	let acuityLvl=getNumber("acuityLvl1")+getNumber("acuityLvl2")
	let empathyLvl=getNumber("empathyLvl1")+getNumber("empathyLvl2")
	let evokeLvl=getNumber("evokeLvl1")+getNumber("evokeLvl2")
	let guileLvl=getNumber("guileLvl1")+getNumber("guileLvl2")
	let cultureLvl=getNumber("cultureLvl1")+getNumber("cultureLvl2")
	let craftsLvl=getNumber("craftsLvl1")+getNumber("craftsLvl2")
	let natureLvl=getNumber("natureLvl1")+getNumber("natureLvl2")
	let mageryLvl=getNumber("mageryLvl1")+getNumber("mageryLvl2")
	let graceLvl=getNumber("graceLvl1")+getNumber("graceLvl2")
	let fitnessLvl=getNumber("fitnessLvl1")+getNumber("fitnessLvl2")
		
	let experience=intellect-totalSkills()
	
	function totalSkills() {
		let r = 
			acuityLvl+
			empathyLvl+
			evokeLvl+
			guileLvl+
			cultureLvl+
			craftsLvl+
			natureLvl+
			mageryLvl+
			graceLvl+
			fitnessLvl
		
		return r
	}
	
	let load= (getNumber("head") || 0) +
				(getNumber("armor") || 0) +
				(getNumber("offhand") || 0)

    if (document.getElementById("poleHandle").checked)
        load+=1
    if (document.getElementById("thrown").checked)
        load+=1
    if (document.getElementById("finess").checked)
        load+=1
    if (document.getElementById("twoHanded").checked)
        load-=Math.floor(strength/3)

	let liberty
	let burden=strength-load
	setValue ("Burden", burden)
	setValue ("PWR", PWR(getNumber("head")))
	
    _off = dexterity;
    _def = dexterity;

	let OffPrep = getNumber("OffPrep")
	let DefPrep = getNumber("DefPrep")
	let AgiPrep = getNumber("AgiPrep")
	let PrepCost = (OffPrep + DefPrep + AgiPrep) * 3
	setValue ("Init", _init-PrepCost)
	
	setValue ("Body", strength*2)
	setValue ("Will", strength+intellect)
	setValue ("Agility", strength+dexterity+burden+AgiPrep)
	setValue ("Focus", (dexterity+intellect+experience))
	setValue ("Offense", _off)	
	setValue ("Defense", _def)
	setValue ("EXP", experience)
	setValue ("Trauma", experience)
	setValue ("acuity", Math.ceil(acuityLvl/2*intellect))
	setValue ("empathy", Math.ceil(empathyLvl/2*intellect))
	setValue ("evoke", Math.ceil(evokeLvl/2*intellect))
	setValue ("guile", Math.ceil(guileLvl/2*intellect))
	setValue ("culture", Math.ceil(cultureLvl/2*intellect))
	setValue ("crafts", Math.ceil(craftsLvl/2*intellect))
	setValue ("nature", Math.ceil(natureLvl/2*intellect))
	setValue ("magery", Math.ceil(mageryLvl/2*intellect))
	setValue ("grace", Math.ceil(graceLvl/2*dexterity))
	setValue ("fitness", Math.ceil(fitnessLvl/2*strength))

	

    let offensiveEquipBonus = 0
    let defensiveEquipBonus = 0
    let offhandType = document.getElementById("offhandtype")
    if (offhandType.value == "Shield") {
        defensiveEquipBonus = getNumber("offhand") || 0
    } else if (offhandType.value == "Weapon") {
        offensiveEquipBonus = getNumber("offhand") || 0
    }

    let advantagedOffPreps = Math.min(offensiveEquipBonus, OffPrep)
    let regularOffPreps = OffPrep - advantagedOffPreps
    let equipmentOffBonus = advantagedOffPreps * Math.floor(dexterity/2) + regularOffPreps;
	setValue ("Offense", _off + equipmentOffBonus)

    let advantagedDefPreps = Math.min(defensiveEquipBonus, DefPrep)
    let regularDefPreps = DefPrep - advantagedDefPreps
    let equipmentDefBonus = advantagedDefPreps * Math.floor(dexterity/2) + regularDefPreps;
	setValue ("Defense", _def + equipmentDefBonus)
}

function rollInitiative(){
	let focus = getNumber("Focus") || 0
	_init = check()+focus
	setValue ("Init", _init)
    setValue("OffPrep", "")
    setValue("DefPrep", "")
    setValue("AgiPrep", "")
    figureStats()
}

function check(){
	return (roll(1,12)-roll(1,12))
}