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
                "4+Range",
                "X",
                "Ignite any object with an unliving fire that will burn coldly for X days, emitting light the color of the object."
            ),
            new Spell("Heightened Senses",
                2,
                false,
                "4+Range",
                "2+1R",
                "Increase the subject’s Acuity by 10 while the spell is active for the purposes of modeling having gained supernaturally sensitive senses. With Heightened Senses, a character has the eyes of an owl, ears of a hare, nose of hound, and can usually tell if there are creatures in the immediate vicinity. This spell must be maintained each time the subject passes 10 AP."
            ),
            new Spell("Project Force",
                2,
                true,
                "4+(Range/DEX)",
                "X",
                "Deals X power to a subject X+STR hexes away. If the subject is dealt more damage than it has STR it is knocked prone."
            ),
            new Spell("Aid",
                2,
                true,
                "4+Range",
                "X",
                "Grants the subject +2X STR, DEX, or INT until they have passed 20 AP. "
            ),
            new Spell("Blur",
                2,
                true,
                "4+Range",
                "1+1R",
                "Obfuscate all perception of the subject. Grant the subject +4 Defense. This spell must be maintained eacht time the subject passes 10 AP."
            ),
            new Spell("Slow",
                3,
                false,
                "4+Range",
                "1-3",
                "It costs the subject +2*1-3 AP to Run until the subject has passed 40 AP."
            ),
            new Spell("Trailtwister",
                2,
                false,
                "4",
                "4",
                "An area of land 4 acres in size in twisted and distorted such that no creature with can keep its bearing. Tracking of any kind becomes impossible, and every turn is a wrong turn. Crossroads are scrambled and lead always in the wrong direction. Before entering one of these, Nature should be checked. If the result is greater than the caster’s roll, it can be seen that the trail is twisted. Trailtwister lasts 1 day."
            ),
            new Spell("Fumble",
                3,
                false,
                "4+Range",
                "1-2",
                "The subject drops any one thing held in a single hand. This spell costs 2 if the subject’s STR is 10 or more or if they're holding one thing in two hands."
            ),
            new Spell("Confound",
                3,
                true,
                "4+Range",
                "X",
                "Subtract X from the subjects DEX or INT until the subject has passed 20 AP."
            ),
            new Spell("Avert",
                3,
                true,
                "4+Range",
                "2+1R",
                "The subject cannot move closer to the mage, and the first actions they take each round must be moving themselves at least 2 hexes further away from the mage at any cost. If the only way away is hazardous, they may opt to sprawl prone on the ground to save themselves from the hazard. This spell must be maintained each time the subject passes 10 AP."
            ),
            new Spell("Ward",
                3,
                true,
                "8-Craft",
                "X",
                "Draw a protective ward around a X*3 hex area. The spell will hide this circle, and everything within it will always be known to the mage who authored it. If something inside the Ward should draw the attention of the mage, it will do so even in sleep. A mage can only be attuned to an amount of Wards equal to their Magery at a time, wards last X weeks."
            ),
            new Spell("Lock/Knock",
                4,
                false,
                "8-Craft+Range",
                "-",
                "This spell controls doors, gates, etc., and can be used in two opposite ways: to hold something closed or to open it. A door held by a LOCK spell can be opened only by a KNOCK or by physical destruction, a KNOCK will negate one LOCK spell OR open one ordinary lock. A door held by two physical locks and three LOCK spells would require five KNOCK spells to open it. Cost to cast this spell, either as LOCK or KNOCK, is 2 WL. NOTE: Some things (like a ton of sand, or a troll holding it) will close a door in the face of any KNOCK. A successful KNOCK spell will NEVER trigger traps. A failed KNOCK spell will ALWAYS trigger any traps that opening the door would have. A KNOCK will not affect a spell-created GATE. It IS possible to pick a lock held by a LOCK spell. Each LOCK spell on a door adds one disadvantage to ONE lock on that door (the GM decides which one). If a lock is secured by two LOCK spells, it takes  dice to open. Opening it voids the spells. If a door has no locks on it, a LOCK spell makes it harder to push open. No more than five LOCK spells may be cast on one door, no matter how many locks it has on it. A LOCK lasts until something removes it or the door is opened — except that a mage may pass through his own LOCK spells without removing them."
            ),
            new Spell("Wolf",
                4,
                false,
                "4",
                "2+1R",
                "Summon a wolf with 5 STR (2 Liberty), 7 DEX, 3 INT and 3 Natural Power with Finesse within STR hexes of the caster. Must be maintained every time it passes 10 AP."
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
                "4+Range",
                ".25 Target’s STR",
                "Knocks subject down. Does NO damage — but if subject is on edge of a chasm, pit, river, etc., they must exceed 4 on a disadvantaged saving roll+Grace to avoid falling in. A good hard Project Force would have the same effect."
            ),
            new Spell("Haste",
                5,
                false,
                "4",
                "X",
                "Reduce the cost of the subject’s movements actions by half until they’ve passed X*20 AP."
            ),
            new Spell("Myrmidon",
                5,
                false,
                "4",
                "2+1R",
                "Summon a myrmidon with 6 STR, 6 DEX, 4 INT, and a power 6 Broadsword within STR hexes of the caster. Must be maintained every time it passes 10 AP."
            ),
            new Spell("Dazzle",
                5,
                false,
                "4",
                "X",
                "Creates a blinding psychic flash. All sighted creatures (friend or foe) in an area within STR*X hexes of the mage (but NOT the mage himself) suffer -X DEX until they've passed 30 AP."
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
                "4+Range",
                "2+1R",
                "Does 3 power damage to any other creature in the subject's hex, at the end of each turn the spell is on. Armor and shields don't protect. Cost: 2 to cast, 1 each turn it's maintained."
            ),
            new Spell("Sleep",
                5,
                true,
                "4+Range",
                "3",
                "Puts subject to sleep until it (a) awakens naturally, which takes several hours, (b) is hit, or (c) is shaken awake (takes 20 AP) by a figure in an adjoining hex. A sleeping figure falls down. Does NOT work on figures with 20 or more Will. "
            ),
            new Spell("Bear",
                5,
                true,
                "4",
                "4+1R",
                "Summon a bear with STR 15, DEX 5, INT 6, and 8 Natural power within STR hexes of the caster. Must be maintained every time it passes 10 AP."
            ),
            new Spell("Illusion",
                5,
                true,
                "4",
                "X+1",
                "Create a 1 hex illusion within X*STR hexes of the caster. An illusion is indistinguishable from a real creation in both form and function by all minds that believe it. If any creature exceeds 4 on a roll+INT-Trauma (which they must spend 5 AP to do), the illusion will be unraveled. Unthinking things like mirrors or water will not corroborate the mage's illusion. The presence of such details in the environment that would betray the reality of an illusion (it is standing in running water without disrupting its flow, falling snow does not settle on it, etc.) may be used to argue for a reduction in the AP cost or difficulty of disbelief. Lasts X*12 minutes."
            ),
            new Spell("Control Animal",
                2,
                true,
                "3+Ranges",
                "2+1R",
                "Puts any one animal under mage’s control as long as spell is maintained. Works only on real animals, if the subject was actually an illusion or image, it vanishes when the spell strikes. A controlled animal will follow most orders, including orders to attack its friends, but resists the spell if they exceed 6 on a saving roll+INT-Trauam. This spell does NOT affect humanoids or dragons. It does affect wolves, bears, etc."
            ),
            new Spell("Reverse Missiles",
                5,
                true,
                "4+Range",
                "2+1R",
                "Causes any missile spells (or missile or thrown weapons) aimed at the spell's subject to turn against the one who fired them instead. If the character who fired the missile is also protected by REVERSE MISSILES, the missile flies back and forth (one round trip per turn) until it strikes some intervening object or one of the spells ceases. This spell must be maintained each time the subject passes 10 AP."
            ),
            new Spell ("Ensnare",
                5,
                true,
                "4+Range",
                "3",
                "Woody vines sprout from the ground and try to entangle the subject. IMMEDIATELY increase the subject's Load by 2. Each 10 AP the subject passes increases their Load by 1 as the spell develops. To disentangle, the subject must spend 10 AP and exceed 4 on a saving roll+DEX-Burden. A successful saving roll means the subject has escaped the vines, which then wither and die. A figure in an adjoining hex can disentangle the subject in the same way — by spending 10 AP and exceeding 4 on a roll+DEX-Burden."
            ),
            new Spell ("Create Wall",
                5,
                true,
                "4",
                "2",
                "Creates a solid wall in one hex within 2*STR hexes of the mage— looks like a real wall. This spell CANNOT be cast over a figure or part of a figure to entomb him/her in solid rock; cast at a hex containing a figure, it fails. (A wall cast on an image, or part of one, WILL destroy it.)"
                ),
            new Spell ("Spook",
                3,
                false,
                "4+Range",
                "1+1R",
                "Lets the subject walk, run, climb, etc., totally noiselessly. +DEX Grace and Fitness to absorb a fall. This spell must be maintained each time the subject passes 10 AP."
                ),
            new Spell ("Snake",
                5,
                true,
                "4",
                "4+1R",
                "Summon a snake with STR 2, DEX 7, INT 2, +2 Defense, and +4 Focus within STR hexes of the caster. The snake’s venom deals 1 power every time the victim passes 5 AP until the victim has passed power 2*10 AP. More venom does not increase the effect. Must be maintained every time it passes 10 AP."
                ),
            new Spell ("Stasis",
                6,
                false,
                "4+Range",
                "X",
                "Everything in one hex into a perfect state of stasis, negating every AP the subjects would spend or produce until the Stasis has negated power (X*10) AP. This effectively puases most magical effects currently on the subjects as well as prevents them from taking any actions. Subjects in stasis can't be moved, attacked, or otherwise affected while they are in stasis, and also cannot percieve anything during the duration of the stasis (including the stasis itself)."
                ),
            new Spell ("Invisibility",
                5,
                false,
                "4+Range",
                "3+1R",
                "Makes the subject invisible. Remove their counter from the game board and track their movements externally. Additionally, invisible figures are at +4 Defense (this does not stack with the effects of darkness or blur). This spell must be maintained each time the subject passes 10 AP."
                ),
            new Spell ("Explode",
                6,
                false,
                "4",
                "X",
                "Deal 1+X power damage to every creature (including the caster) in the caster's and each adjacent hex."
                ),
            new Spell ("Mage Sight",
                5,
                false,
                "4+Range",
                "2+1R",
                "Allows its subject to see objects concealed by blur, invisibility, shadow, or ordinary darkness. This spell must be maintained each time the subject passes 10 AP."
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
                "4+Range",
                "-",
                "Lets the mage drain mental energy from others (humans or humanoids only) into himself. The person being drained must cooperate or be subjugated (tied up, unconscious, etc.). Each 3 Will drained from the subject replenishes 1 of the caster's."
                ),
            new Spell ("Eyes Behind",
                5,
                true,
                "4+Range",
                "2+1R",
                "The subject gains total awareness of their full periphery which expands into a full sphere of visual perception around them. Flanking a figure with Eyes Behind active upon it is impossible. This spell must be maintained each time the caster passes 10 AP."
                ),
            new Spell ("Levitation",
                5,
                true,
                "4+Range",
                "3+1R",
                "Levitates the subject off the ground, granting them a limited ability to fly. An inexperienced flier (groundwalker) will be at -2 offense in melee, plus -2 offense to shoot or cast. A winged creature given the power of levitation will instead receive +2 DEX. All levitating figures have 2+Range defense and pay no additional costs to move up or down elevation or over difficult terrain. This spell must be maintained each time the caster passes 10 AP."
                ),
            new Spell ("Gargoyle",
                6,
                true,
                "4",
                "4+1R",
                "Summons a levitating Gargoyle with 10 STR, 5 DEX, 4 INT, 6 Natural Power, 2 Natural Armor. Must be maintained every time it passes 10 AP."
                ),
            new Spell ("Control Person",
                6,
                true,
                "4+Range",
                "3+1R",
                "Puts any one human or humanoid, natural or summoned, under mage's control for as long, as spell is maintained. If target was an image or illusion, it disappears. A controlled person will follow most orders, including orders to attack his former friends. This spell must be maintained each time the subject passes 10 AP. Each time this spell is maintained, its subject may be released if they exceed 4 on a saving roll+INT-Trauma."
                ),
            new Spell ("Stone Flesh",
                6,
                true,
                "4+Range",
                "2+1R",
                "Gives subject's body the power to act as armor, stopping 4 hits per attack. The protective effect of Stone Flesh is cumulative with any other natural or magical hit-stopping ability (armor, fur, etc.) of its possessor, but not with Iron Flesh. This spell can only be detected by a figure that exceeds 6 on a roll+Acuity+Magery. This spell must be maintained each time the subject passes 10 AP."
                ),
            new Spell ("Mage Grease",
                6,
                true,
                "4+Range",
                "4",
                "Makes the floor over one megahex extremely slick. Each figure taking any action in a greasy hex, or moving onto a greasy hex, must exceed 4 on a saving roll+Grace to avoid falling. Mage Grease is extremely difficult to clean, depending on the materials it coats. It usually takes 6 hours to clean, and the surfaces will be damaged beyond repair unless somebody on the job succeeds on a saving roll+Crafts (the difficulty of which should be judged by the materials it coats). A marble floor will never be damaged by grease, but carpet may require an 8 or higher to recover."
                ),
            new Spell ("Halt",
                6,
                true,
                "4+Range",
                "X",
                "Disallows the subject from taking any movement actions until they've passed X*10 AP."
                ),
            new Spell ("4 Hex Image",
                6,
                false,
                "4",
                "2",
                "Like the Image spell, but covering up to 3 connected hexes."
                ),
            new Spell ("3 Hex Wall",
                6,
                true,
                "Like the Wall spell, but covering up to 3 connected hexes.",
                "",
                ""
                ),
            new Spell ("Mage Glue",
                6,
                true,
                "4+Range",
                "4",
                "Produces enough Mage Glue to cover one megahex of the floor. Any figure standing on a sticky hex may only take the Shift movement action and only at double cost. Mage Glue can only be cleaned by Mage Grease. For the purposes of movement, Mage Grease and Mage Glue are each effectively negated by the other."
                ),
            new Spell ("Curse",
                6,
                true,
                "4+Range",
                "5R",
                "The subject of a curse is at +1 Disadvantage on all rolls. This spell must be maintained at each full moon."
                ),
            new Spell ("Open Tunnel",
                6,
                true,
                "4+Range",
                "10",
                "Turns one hex of rock (or any other material) into air. The effect of this spell is permanent. A smaller area may be affected if the mage wishes, and the mage may control the shape of the area. Cost: 10 WL. It is possible to kill with this spell by turning all or part of a foe into air. However, the spell is not instantaneous. If this spell is directed against a living being, that creature can escape if they exceed 4 on a disadvantaged saving roll+Grace. If the roll is successful, the target creature immediately jumps back one hex, out of the way. Otherwise, he (or part of his body) vanishes. The damage should equal the difference between the failed roll+Grace and 4."
                ),
            new Spell ("Telekinesis",
                6,
                true,
                "-",
                "1",
                "Lets mage take physical actions at a distance. Objects may be picked up and thrown around, locks may be picked, levers pulled, etc. A mage may do anything with TK that he could do if his own body were there. If the mage cannot see what he's doing with his telekinesis, it as though he is doing it in total darkness. Additionally, the mage is at -Range DEX for all actions he takes telekinetically. Every 5 AP spent telekinetically costs the mage 1 Will."
                ),
            new Spell ("Control Elemental",
                6,
                true,
                "",
                "3+1R",
                "Puts any one elemental under mage's control as long as spell is maintained. The elemental will resist the spell if it exceeds 6 on a saving roll+INT. Most elementals will simply leave if a control spell fails, but a fire elemental may well attack, and any large elemental might feel hostile; make a reaction r A controlled elemental will follow most orders (see CONTROL SPELLS), but gets another 3-die saving roll if given an order which is likely to result in its own demise. WL cost to mage: 3, plus 1 every MINUTE (6 turns) the spell is maintained after the first minute. If the elemental has a ST greater than 30, double this cost. A mage may control morc than one elemental, but they MUST be of the same type;. this is true even if he created the elementals himself."
                ),
            new Spell ("",
                7,
                false,
                "",
                "",
                ""
                ),
            new Spell ("",
                7,
                false,
                "",
                "",
                ""
                ),
            new Spell ("",
                7,
                false,
                "",
                "",
                ""
                ),
            new Spell ("",
                7,
                false,
                "",
                "",
                ""
                ),
            new Spell ("",
                7,
                false,
                "",
                "",
                ""
                ),
            new Spell ("",
                7,
                false,
                "",
                "",
                ""
                ),
            new Spell ("",
                7,
                false,
                "",
                "",
                ""
                ),

            ];

        this.spellFilter = "";
        this.onlyShowKnown = false;
        this.character = null;
        this.refreshTrigger = 1;
    }

    getSpellByName(name) {
        return this.spells.find(spell => spell.name.toLowerCase() == name.toLowerCase());
    }

    spellIsKnown(spell) {
        return this.character?.knownSpellNames.has(spell.name.toLowerCase());
    }

    learn(spell) {
        this.character?.knownSpellNames.add(spell.name.toLowerCase());
        this.refreshTrigger++;
        this.character.figureStats();
    }

    unlearn(spell) {
        this.character?.knownSpellNames.delete(spell.name.toLowerCase());
        this.refreshTrigger++;
        this.character.figureStats();
    }

    get filteredSpells() {
        return this.spells.filter(spell => {
            let name = spell.name.toLowerCase();
            return name.includes(this.spellFilter.toLowerCase()) 
                && (!this.onlyShowKnown || this.character?.knownSpellNames.has(name));
        });
    }
}