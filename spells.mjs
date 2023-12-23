export class Spell {
    constructor(name, level, advanced, difficult, cost, effect) {
        this.name = name;
        this.level = level;
        this.advanced = advanced;
        this.difficult = difficult;
        this.cost = cost;
        this.effect = effect;
    }
}

export let spells = [
    new Spell("Image",
        2,
        false,
        "4",
        "X",
        "Create a 1 hex image within X*DX hexes of the caster. An image cannot emit light but can emit smells no stronger than manure and sounds no louder than a speaking voice. Lasts X*12 minutes."
    ),
    new Spell("Light",
        2,
        false,
        "2+Range",
        "X",
        "Ignite any object with an unliving fire that will burn coldly for X days, emitting light the color of the object."
    ),
    new Spell("Heightened Senses",
        2,
        false,
        "4+Range",
        "2+1R",
        "Increase the target’s Acuity by 10 while the spell is active for the purposes of modeling having gained supernaturally sensitive senses. With Heightened Senses, a character has the eyes of an owl, ears of a hare, nose of hound, and can usually tell if there are creatures in the immediate vicinity. "
    ),
    new Spell("Project Force",
        2,
        true,
        "3+(Range/DX)",
        "X",
        "Deals X Power to a target X+DX hexes away. If Project Force deals more damage the target has ST, it knocks the target prone."
    ),
    new Spell("Aid",
        2,
        true,
        "3+Range",
        "X",
        "Grants the target +2X ST, DX, or IQ until they have spent 20 action points. "
    ),
    new Spell("Blur",
        2,
        true,
        "3+Range",
        "1+1R",
        "Obfuscate all perception of the subject. Grant the target +4 Defense."
    ),
    new Spell("Slow",
        3,
        false,
        "3+Range",
        "1-3",
        "It costs the target +2*1-3 Action Points to Run until the target has spent 40 Action Points."
    ),
    new Spell("Trailtwister",
        3,
        false,
        "2",
        "4",
        "An area of land 4 acres in size in twisted and distorted such that no creature with can keep its bearing. Tracking of any kind becomes impossible, and every turn is a wrong turn. Crossroads are scrambled and lead always in the wrong direction. Before entering one of these, Nature should be checked. If the result is greater than the caster’s roll, it can be seen that the trail is twisted. Trailtwister lasts 1 day."
    ),
    new Spell("Fumble",
        3,
        false,
        "3+Range",
        "1-2",
        "The target drops any one thing held we in a single hand. This spell costs 2 if the target’s ST is 10 or more."
    ),
    new Spell("Confound",
        3,
        true,
        "3+Range",
        "X",
        "Subtract X from the targets DX or IQ until the target has spent 20 Action Points."
    ),
    new Spell("Avert",
        3,
        true,
        "3+Range",
        "2+1R",
        "The target cannot move closer to the mage, and the first actions they take each round must be moving themselves at least 2 hexes further away from the mage at any cost. If the only way away is hazardous, they may opt to sprawl prone on the ground to save themselves from the hazard."
    ),
    new Spell("Ward",
        3,
        true,
        "4-Craft",
        "X",
        "Draw a protective ward around a X*3 hex area. The spell will hide this circle, and everything within it will always be known to the mage who authored it. If something inside the Ward should draw the attention of the mage, it will do so even in sleep. A mage can only be attuned to an amount of Wards equal to their Magery at a time, wards last X weeks."
    ),
    new Spell("Lock/Knock",
        4,
        false,
        "2+Range",
        "-",
        "This spell controls doors, gates, etc., and can be used in two opposite ways: to hold something closed or to open it. A door held by a LOCK spell can be opened only by a KNOCK or by physical destruction, a KNOCK will negate one LOCK spell OR open one ordinary lock. A door held by two physical locks and three LOCK spells would require five KNOCK spells to open it. Cost to cast this spell, either as LOCK or KNOCK, is 2 WL. NOTE: Some things (like a ton of sand, or a troll holding it) will close a door in the face of any KNOCK. A successful KNOCK spell will NEVER trigger traps. A failed KNOCK spell will ALWAYS trigger any traps that opening the door would have. A KNOCK will not affect a spell-created GATE. It IS possible to pick a lock held by a LOCK spell. Each LOCK spell on a door adds one disadvantage to ONE lock on that door (the GM decides which one). If a lock is secured by two LOCK spells, it takes  dice to open. Opening it voids the spells. If a door has no locks on it, a LOCK spell makes it harder to push open. No more than five LOCK spells may be cast on one door, no matter how many locks it has on it. A LOCK lasts until something removes it or the door is opened — except that a mage may pass through his own LOCK spells without removing them."
    ),
    new Spell("Wolf",
        4,
        false,
        "4",
        "2+1R",
        "Summon a wolf with 5 ST (2 Liberty), 7 DX, 3 IQ and 3 Natural Power with Finesse within DX hexes of the caster. Lasts until no longer maintained."
    ),
    new Spell("Fire",
        4,
        true,
        "3+Range",
        "1",
        "Fills one hex with magical flame. No creature of less than IQ 4 will pass through or stay in it, animals are afraid of fire. A figure who moves through a fire hex, or is in a hex when a mage creates fire there, takes 2 damage of damage. A figure which ends its turn in a fire hex takes 2 damage and suffers -2 DX next turn. The effects of fire hexes are cumulative within a turn, but armor and protective spells DO work, Example: A figure moves through 2 fire hexes (4 damage) and stops in a third one to attack (4 more damage). The protection given by that figure's armor and spells are taken from the total of 8 damage to see how much damage the figure actually took from the fire. The damage takes effect as soon as the protection is used up. A mage may also use this spell to produce controlled fire in his own or an adjacent hex. He could light his own cigar, a friend's torch, or an enemy's beard."
    ),
    new Spell("Trip",
        4,
        true,
        "4",
        ".25 Target’s STR",
        "Knocks victim down. Does NO damage — but if victim is on edge of a chasm, pit, river, etc., he must make a disadvantaged saving roll+Grace to avoid falling in. A good hard Magic Fist would have the same effect. "
    ),
    new Spell("Haste",
        5,
        false,
        "4",
        "X",
        "Reduce the cost of the target’s movements actions by half until they’ve spent X*20 action points."
    ),
    new Spell("Myrmidon",
        5,
        false,
        "4",
        "2+1R",
        "Summon a myrmidon with 6 STR, 6 DEX, 4 INT, and a Power 6 Broadsword within DX hexes of the caster. Lasts until no longer maintained."
    ),
    new Spell("Dazzle",
        5,
        false,
        "4",
        "-",
        "Creates a blinding psychic flash. All sighted creatures (friend or foe) in an area within 15 hexes of the mage (but NOT the mage himself) suffer -3 DX for 3 turns. Images, illusions, etc. (ANYTHING with eyes) are affected. Cost: 3 WL."
    ),
    new Spell("Shadow",
        5,
        false,
        "3+Range",
        "1",
        "Fills one hex with totally black shadow, extending some 3 meters in the air. Figures inside shadow hexes have -4 Offense and +4 Defense. "
    ),
    new Spell("Electrify",
        5,
        false,
        "3+Range",
        "2+1R",
        "Does 3 Power of damage to any other creature in the subject's hex, at the end of each turn the spell is on. Armor and shields don't protect. Cost: 2 to cast, 1 each turn it's maintained."
    ),
    new Spell("Sleep",
        5,
        true,
        "3+Range",
        "3",
        "Puts target to sleep until it (a) awakens naturally, which takes several hours, (b) is hit, or (c) is shaken awake (takes 20 Action Points) by a figure in an adjoining hex. A sleeping figure falls down. Does NOT work on figures with 20 or more Will. "
    ),
    new Spell("Bear",
        5,
        true,
        "4",
        "4+1R",
        "Summon a bear with ST 15, DX 5, IQ 6, and 8 Natural Power within DEX hexes of the caster. Lasts until no longer maintained."
    ),
    new Spell("Control Animal",
        5,
        true,
        "3+Ranges",
        "2+1R",
        "Puts any one animal under mage’s control as long as spell is maintained. Works only on real animals, if the target was actually an illusion or image, it vanishes when the spell strikes. A controlled animal will follow most orders, including orders to attack its friends but gets a saving roll+INT to resist the spell. This spell does NOT affect humanoids or dragons. It does affect wolves, bears, etc. "
    ),
    new Spell("Reverse Missiles",
        5,
        true,
        "3+Range",
        "2+1R",
        "Causes any missile spells (or missile or thrown weapons) aimed at the spell's subject to turn against the one who fired them instead. When this spell is cast, the player records the fact, secretly. He shows it to the other player at the END of the first turn in which missiles were fired at the spell's subject. All missiles which hit that figure are then considered to have hit the figure who fired them, instead (same damage). This may result in \"replaying\" part of a turn, to achieve the proper unpleasant surprise to the player who fired the missiles. (Exception: If a highly dexterous archer fired two arrows at the protected figure in one turn, only the first arrow turns back. The dexterous archer is then warned, and NO second arrow is fired.) This spell has NO EFFECT against non-missile attacks. Cost: 2 WL, plus 1 each turn it is maintained. If the character who fired the missile is also protected by REVERSE MISSILES, the missile flies back and forth (one round trip per turn) until it strikes some intervening object or one of the spells ceases."
    ),
]