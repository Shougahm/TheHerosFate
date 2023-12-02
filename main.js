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
	let STR=getNumber("STR") || 0
	let DEX=getNumber("DEX") || 0
	let INT=getNumber("INT") || 0
	let BOD=getNumber("BOD") || 0
	let WIL=getNumber("WIL") || 0
	let AGI=getNumber("AGI") || 0
	let FOC=getNumber("FOC") || 0
	let TRM=getNumber("TRM") || 0
	
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
		
	let EXP=INT-totalSkills()
	
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
	
	let Weight= (getNumber("head") || 0) +
				(getNumber("armor") || 0) +
				(getNumber("offhand") || 0)

    if (document.getElementById("poleHandle").checked)
        Weight+=1
    if (document.getElementById("thrown").checked)
        Weight+=1
    if (document.getElementById("finess").checked)
        Weight+=1
    if (document.getElementById("twoHanded").checked)
        Weight-=1

	let BUR=STR-Weight
	setValue ("BUR", BUR)
	setValue ("PWR", PWR(getNumber("head")))
	
    _off = DEX;
    _def = DEX;

	let OffPrep = getNumber("OffPrep")
	let DefPrep = getNumber("DefPrep")
	let AgiPrep = getNumber("AgiPrep")
	let PrepCost = (OffPrep + DefPrep + AgiPrep) * 3
	setValue ("Init", _init-PrepCost)
	
	setValue ("BOD", STR*2)
	setValue ("WIL", STR+INT)
	setValue ("AGI", STR+DEX+BUR+AgiPrep)
	setValue ("FOC", (DEX+INT+EXP))
	setValue ("OFF", _off)
	setValue ("DEF", _def)
	setValue ("EXP", EXP)
	setValue ("TRM", EXP)
	setValue ("acuity", Math.ceil(acuityLvl/2*INT))
	setValue ("empathy", Math.ceil(empathyLvl/2*INT))
	setValue ("evoke", Math.ceil(evokeLvl/2*INT))
	setValue ("guile", Math.ceil(guileLvl/2*INT))
	setValue ("culture", Math.ceil(cultureLvl/2*INT))
	setValue ("crafts", Math.ceil(craftsLvl/2*INT))
	setValue ("nature", Math.ceil(natureLvl/2*INT))
	setValue ("magery", Math.ceil(mageryLvl/2*INT))
	setValue ("grace", Math.ceil(graceLvl/2*DEX))
	setValue ("fitness", Math.ceil(fitnessLvl/2*STR))

	

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
    let equipmentOffBonus = advantagedOffPreps * Math.floor(DEX/2) + regularOffPreps;
	setValue ("OFF", _off + equipmentOffBonus)

    let advantagedDefPreps = Math.min(defensiveEquipBonus, DefPrep)
    let regularDefPreps = DefPrep - advantagedDefPreps
    let equipmentDefBonus = advantagedDefPreps * Math.floor(DEX/2) + regularDefPreps;
	setValue ("DEF", _def + equipmentDefBonus)
}

function rollInitiative(){
	let FOC = getNumber("FOC") || 0
	_init = check()+FOC
	setValue ("Init", _init)
    setValue("OffPrep", "")
    setValue("DefPrep", "")
    setValue("AgiPrep", "")
    figureStats()
}

function check(){
	return (roll(1,12)-roll(1,12))
}