export class Action {
    constructor(action, cost, condition, resolution) {
      this.action = action;
      this.cost = cost;
      this.condition = condition;
      this.resolution = resolution;
    }
}

// TODO Make these costs real numbers in anticipation of some kind of Action Point tracker. 
export const actions = [
    new Action('Melee', 5, 'Even Phase', 'Roll damage against a melee target whose Defense≤Roll+Offense+2Flanking equal to Weapon Power.'),

    new Action('Bind', 5+'Engagement', 'Even Phase', 'Enter a bind with a target whose Defense+Grace≤Roll+Offense+Grace+2Flanking. Bound figures are Burdened equal to the Fitness of the other figure in the Bind. Aditionally, each figure is forced to reface directly toward each other. If you exceed your roll by their Grace, you may take it to the floor immediately. All bound figures are disarmed in this case.'),

    new Action('Takedown', 5, 'Even Phase, Bound', 'You and whoever you are Binding falls prone if you exceed their Defense+Grace on a Roll+Offense+Grace. If you exceed their Defense+Grace by their Fitness, you may choose not to fall prone with them.'),

    new Action('Maul/Submit', 5, 'Even Phase, Bound, Prone', 'You maul a target whose Defense+Grace≤Roll+Offense+Grace, dealing Roll+Fitness power damage. You may instead choose to submit, dealing Fitness power stun.'),

    new Action('Escape/Stand', 5, 'Any Phase, Bound', 'You maul a target whose Defense+Grace≤Roll+Offense+Grace, dealing Roll+Fitness power damage. You may instead choose to deal Fitness power stuns.'),

    new Action('Bash', 5, 'Even Phase', "If you exceed the target's Defense+Fitness+Charge on a roll+Offense+Fitness+Charge, they must move into any open adjacent hex away from you. Additionally, they are tripped if you exceeded your roll by their Fitness. In the case of Bashing, treat Shields as Offhand Weapons (they affect offensive preparations) and treat Offhand Weapons as nothing."),

    new Action('Parry', 5, 'Even Phase', "Treat Offhand Weapons as Shields (they affect offensive preparations) and treat Shields as nothing until you spend 5 AP. If your defense exceeds an attacker's roll by half their Grace during this time, disarm them. If you exceed their attack by their entire Grace, they drop the weapon into any adjacent open hex you choose. If they crit fail their attack, you may break their weapon."),

    new Action('Throw', 5, 'Even Phase', 'Roll damage against any target whose Defense≤Roll+Offense-Range'),

    new Action('Shoot', '12-DEX+Velocity+Engagement', 'Even Phase', 'Roll damage against a ranged target whose Defense≤Roll+Offense-(Range/DEX)'),

    new Action('Cast', '5+X+Velocity', 'Even Phase', 'Cast a spell costing X or less Will.'),

    new Action('Run', 'X+Engagement+-1/2LB', 'Odd Phase', 'Move X hexes forward. At any time before, during, or after this movement, you may reface, up to 2 times.'),

    new Action('Shift', 'X*(3+-1/2LB)', 'None', 'Move X hexes in any direction nowhere further from your engagers. You may reface.'),

    new Action('Equip', 'X', 'None', 'If X is at least 3, equip any weapon or item you have accessibly harnessed to your body, or accessibly harness any equipped weapon or item. If X is at least 5, equip any weapon or item loose in same hex as you. If X is at least 8, equip any weapon or item in any container in the same hex as you (including your own inaccessible harness), or inaccessibly harness any weapons or items in the same hex as you.'),
];
