export class Spell {
    constructor(name, level, advanced, difficulty, cost, effect) {
        this.name = name;
        this.level = level;
        this.advanced = advanced;
        this.difficulty = difficulty;
        this.cost = cost;
        this.effect = effect;
    }
}
//TODO How fukin long do creations last? How is time defined? Is counting down the AP things use fucking stupid? Perhaps. Perhaps. Perhaps.
export class SpellList {
    constructor() {
        this.spells = [
            new Spell("Image",
                2,
                false,
                "4",
                "X",
                "Create a 1 hex image within X*STR hexes of the caster. An image cannot emit light but can emit smells no stronger than manure and sounds no louder than a speaking voice. Lasts X*12 minutes."
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
                "3+Range",
                "2+1R",
                "Increase the subject’s Acuity by 10 while the spell is active for the purposes of modeling having gained supernaturally sensitive senses. With Heightened Senses, a character has the eyes of an owl, ears of a hare, nose of hound, and can usually tell if there are creatures in the immediate vicinity. This spell must be maintained each time the subject spends 10 AP."
            ),
            new Spell("Project Force",
                2,
                true,
                "3+(Range/DEX)",
                "X",
                "Deals X power to a subject X+STR hexes away. If the subject is dealt more damage than it has STR it is knocked prone."
            ),
            new Spell("Aid",
                2,
                true,
                "3+Range",
                "X",
                "Grants the subject +2X STR, DEX, or INT until they have spent 20 AP. "
            ),
            new Spell("Blur",
                2,
                true,
                "3+Range",
                "1+1R",
                "Obfuscate all perception of the subject. Grant the subject +4 Defense. This spell must be maintained eacht time the subject spends 10 AP."
            ),
            new Spell("Slow",
                3,
                false,
                "3+Range",
                "1-3",
                "It costs the subject +2*1-3 AP to Run until the subject has spent 40 AP."
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
                "The subject drops any one thing held in a single hand. This spell costs 2 if the subject’s STR is 10 or more."
            ),
            new Spell("Confound",
                3,
                true,
                "3+Range",
                "X",
                "Subtract X from the subjects DEX or INT until the subject has spent 20 AP."
            ),
            new Spell("Avert",
                3,
                true,
                "3+Range",
                "2+1R",
                "The subject cannot move closer to the mage, and the first actions they take each round must be moving themselves at least 2 hexes further away from the mage at any cost. If the only way away is hazardous, they may opt to sprawl prone on the ground to save themselves from the hazard. This spell must be maintained each time the subject spends 10 AP."
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
                "Summon a wolf with 5 STR (2 Liberty), 7 DEX, 3 INT and 3 Natural Power with Finesse within STR hexes of the caster. Must be maintained every time it spends 10 AP."
            ),
            new Spell("Fire",
                4,
                true,
                "4",
                "X",
                "Fills one hex within X+STR hexes of the caster with magical flame. No creature of less than INT 4 will pass through or stay in it, animals are afraid of fire. A figure who moves through a fire hex, or is in a hex when a mage creates fire there, takes 2 power damage. A figure which ends its turn in a fire hex takes 2 power damage and suffers -1 DEX next turn. The effects of fire hexes are cumulative within a turn, but armor and protective spells DO work, Example: A figure moves through 2 fire hexes (4 power damage) and stops in a third one to attack (4 more power damage). The protection given by that figure's armor and spells are taken from the total of all the damage to see how much damage the figure actually took from the fire. The damage takes effect as soon as the protection is used up. A mage may also use this spell to produce controlled fire in his own or an adjacent hex. He could light his own cigar, a friend's torch, or an enemy's beard."
            ),
            new Spell("Trip",
                4,
                true,
                "3+Range",
                ".25 Target’s STR",
                "Knocks subject down. Does NO damage — but if subject is on edge of a chasm, pit, river, etc., they must exceed 4 on a disadvantaged saving roll+Grace to avoid falling in. A good hard Project Force would have the same effect."
            ),
            new Spell("Haste",
                5,
                false,
                "4",
                "X",
                "Reduce the cost of the subject’s movements actions by half until they’ve spent X*20 AP."
            ),
            new Spell("Myrmidon",
                5,
                false,
                "4",
                "2+1R",
                "Summon a myrmidon with 6 STR, 6 DEX, 4 INT, and a power 6 Broadsword within STR hexes of the caster. Must be maintained every time it spends 10 AP."
            ),
            new Spell("Dazzle",
                5,
                false,
                "4",
                "X",
                "Creates a blinding psychic flash. All sighted creatures (friend or foe) in an area within STR*X hexes of the mage (but NOT the mage himself) suffer -X DEX until they've spent 30 AP."
            ),
            new Spell("Shadow",
                5,
                false,
                "4",
                "X",
                "Fills one hex within X+STR hexes of the caster with totally black shadow, extending some 3 meters in the air. Figures inside shadow hexes have -4 Offense and +4 Defense. "
            ),
            new Spell("Electrify",
                5,
                false,
                "3+Range",
                "2+1R",
                "Does 3 power damage to any other creature in the subject's hex, at the end of each turn the spell is on. Armor and shields don't protect. Cost: 2 to cast, 1 each turn it's maintained."
            ),
            new Spell("Sleep",
                5,
                true,
                "3+Range",
                "3",
                "Puts subject to sleep until it (a) awakens naturally, which takes several hours, (b) is hit, or (c) is shaken awake (takes 20 AP) by a figure in an adjoining hex. A sleeping figure falls down. Does NOT work on figures with 20 or more Will. "
            ),
            new Spell("Bear",
                5,
                true,
                "4",
                "4+1R",
                "Summon a bear with STR 15, DEX 5, INT 6, and 8 Natural power within STR hexes of the caster. Must be maintained every time it spends 10 AP."
            ),
            new Spell("Control Animal",
                5,
                true,
                "3+Ranges",
                "2+1R",
                "Puts any one animal under mage’s control as long as spell is maintained. Works only on real animals, if the subject was actually an illusion or image, it vanishes when the spell strikes. A controlled animal will follow most orders, including orders to attack its friends, but resists the spell if they exceed 6 on a roll+INT. This spell does NOT affect humanoids or dragons. It does affect wolves, bears, etc."
            ),
            new Spell("Reverse Missiles",
                5,
                true,
                "3+Range",
                "2+1R",
                "Causes any missile spells (or missile or thrown weapons) aimed at the spell's subject to turn against the one who fired them instead. If the character who fired the missile is also protected by REVERSE MISSILES, the missile flies back and forth (one round trip per turn) until it strikes some intervening object or one of the spells ceases. This spell must be maintained each time the subject spends 10 AP."
            ),
            new Spell ("Ensnare",
                5,
                true,
                "3+Range",
                "3",
                "Woody vines sprout from the ground and try to entangle the subject. IMMEDIATELY increase the subject's Load by 2. Each 10 AP the subject spends increases their Load by 1 as the spell develops. To disentangle, the subject must spend 10 AP and exceed 4 on a roll+DEX-Burden. A successful saving roll means the subject has escaped the vines, which then wither and die. A figure in an adjoining hex can disentangle the subject in the same way — by spending 10 AP and exceeding 4 on a roll+DEX-Burden."
            ),
            new Spell ("Create Wall",
                5,
                true,
                "4",
                "2",
                "Creates a solid wall in one hex within 2*STR hexes of the mage— looks like a real wall. This spell CANNOT be cast over a figure or part of a figure to entomb him/her in solid rock; cast at a hex containing a figure, it fails. (A wall cast on an image, or part of one, WILL destroy it.)"
                ),
            new Spell ("Spook",
                5,
                true,
                "3+Range",
                "1+1R",
                "Lets the subject walk, run, climb, etc., totally noiselessly. +DEX Grace and Fitness to absorb a fall. This spell must be maintained each time the subject spends 10 AP."
                ),
            new Spell ("Snake",
                5,
                true,
                "4",
                "4+1R",
                "Summon a snake with STR 3, DEX 7, INT 2, +2 Defense, and +4 Focus within STR hexes of the caster. The snake’s venom deals 2 power every time the victim spends 5 AP until the victim has spent power 2*10 AP. More venom does not increase the effect. Must be maintained every time it spends 10 AP."
                ),
            new Spell ("Stasis",
                6,
                false,
                "3+Range",
                "X",
                "Everything in one hex into a perfect state of stasis, negating every AP the subjects would spend or produce until the Stasis has negated power (X*10) AP. This effectively puases most magical effects currently on the subjects as well as prevents them from taking any actions. Subjects in stasis can't be moved, attacked, or otherwise affected while they are in stasis, and also cannot percieve anything during the duration of the stasis (including the stasis itself)."
                ),
            new Spell ("Invisibility",
                6,
                false,
                "3+Range",
                "3+1R",
                "Makes the subject invisible. Remove their counter from the game board and track their movements externally. Additionally, invisible figures are at +4 Defense (this does not stack with the effects of darkness or blur). This spell must be maintained each time the subject spends 10 AP."
                ),
            new Spell ("Explode",
                6,
                false,
                "4",
                "X",
                "Deal 1+X power damage to every creature (including the caster) in the caster's and each adjacent hex."
                ),
            new Spell ("Mage Sight",
                6,
                false,
                "3+Range",
                "2+1R",
                "Allows its subject to see objects concealed by blur, invisibility, shadow, or ordinary darkness. This spell must be maintained each time the subject spends 10 AP."
                ),
            new Spell ("3 Hex Fire",
                6,
                false,
                "4",
                "X",
                "Like the Fire spell, but covering up to 3 connected hexes."
                ),
            new Spell ("3 Hex Shadow",
                6,
                false,
                "4",
                "X",
                "Like the Shadow spell, but covering up to 3 connected hexes."
                ),
            new Spell ("Freezing Mist",
                6,
                false,
                "4",
                "3",
                "Creates a freezing mist 7 hexes in size within X+STR hexes of the caster. Each hex of freezing mist mutually negates any hex of any kind of flame. Each hex of Freezing Mist can be moved 1 hex per phase at will, they must only stay continually connected."
                ),
            new Spell ("Drain Will",
                6,
                false,
                "3+Range",
                "-",
                "Lets the mage drain mental energy from others (humans or humanoids only) into himself. The person being drained must cooperate or be subjugated (tied up, unconscious, etc.). Each 3 Will drained from the subject replenishes 1 of the caster's."
                ),
            new Spell ("Eyes Behind",
                6,
                false,
                "3+Range",
                "2+1R",
                "The subject gains total awareness of their full periphery which expands into a full sphere of visual perception around them. Flanking a figure with Eyes Behind active upon it is impossible. This spell must be maintained each time the caster spends 10 AP."
                ),
            new Spell ("Levitation",
                6,
                true,
                "3+Range",
                "3+1R",
                "Levitates the subject off the ground, granting them a limited ability to fly. An inexperienced flier (groundwalker) will be at -2 offense in melee, plus -2 offense to shoot or cast. A winged creature given the power of levitation will instead receive +2 DEX. All levitating figures have 2+Range defense and pay no additional costs to move up or down elevation or over difficult terrain. This spell must be maintained each time the caster spends 10 AP."
                ),
            new Spell ("Gargoyle",
                6,
                true,
                "4",
                "4+1R",
                "Summons a Gargoyle (10 STR, 5 DEX, 4 INT, 6 Natural Power, 2 Natural Armor. Must be maintained every time it spends 10 AP."
                ),
            new Spell ("",
                6,
                true,
                "",
                "",
                ""
                ),
            new Spell ("",
                6,
                true,
                "",
                "",
                ""
                ),
            new Spell ("",
                6,
                true,
                "",
                "",
                ""
                ),
            new Spell ("",
                6,
                true,
                "",
                "",
                ""
                ),
            new Spell ("",
                6,
                true,
                "",
                "",
                ""
                ),        
            ];

        this.spellFilter = "";
        this.showKnown = true;
        this.character = null;
    }

    learn(spell) {
        this.character.knownSpells.add(spell);
    }

    unlearn(spell) {
        this.character.knownSpells.delete(spell);
    }

    get filteredSpells() {
        return this.spells.filter(spell =>
            spell.name.toLowerCase().includes(this.spellFilter.toLowerCase())
        );
    }
}