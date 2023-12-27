export class Action {
    constructor(action, cost, condition, resolution) {
		this.action = action;
		this.cost = cost;
		this.condition = condition;
		this.resolution = resolution;
    }
}

export const actionRules = "Each unit is given an amount of Action Points (AP) equal to their Agility at the beginning of the first Phase of a Round of combat. During each phase, units take turns spending AP one action at time in order of highest initiative to lowest, and then, in case of ties, in order of highest remaining AP to lowest, then in order of highest Focus to lowest (at this point you can feel free to compare whatever attributes you want to break ties, think about the situation and use your best judgement). Each phase ends only when each unit has agreed that it should, and so does the Round. Each option on the action table will specify what type of Phase you are allowed to take that action on. In general, Odd phases are for movement actions, Even phases are for attack actions.";

export const actions = [
    new Action('Melee', 5, 'Even Phase', 'Roll damage against a melee target whose Defense≤Roll+Offense+2Flanking equal to Weapon Power. If you are grappling the target, roll damage equal to ½ Strength + Natural Weapon Power. If you have submitted the target, roll damage equal to Strength + Natural Weapon Power'),
    new Action('Grapple', '5+Engagement', 'Even Phase', 'Enter the hex of a target whose Defense+Grace≤Roll+Offense+Grace+2Flanking and begin grappling them.'),
    new Action('Submit/Escape', '5', 'Even Phase, Grappling', 'Put an unsubmitted target whose Defense+Grace≤Roll+Offense+Grace into a submission hold of some kind. Once submitted, the target gains Burden equal to Roll+Fitness until they escape.'),
    new Action('Throw', '5', 'Even Phase', 'Roll damage against any target whose Defense≤Roll+Offense-Range'),
    new Action('Shoot', '12-DEX+Velocity+Engagement', 'Even Phase', 'Roll damage against a ranged target whose Defense≤Roll+Offense-(Range/DEX)'),
    new Action('Cast', '5+X+Velocity', 'Even Phase', 'Cast a spell costing X or less Will.'),
    new Action('Run', 'X + Engagement + 1/2LB', 'Odd Phase', 'Move X hexes forward. At any time before, during, or after this movement, you may reface, up to 2 times.'),
    new Action('Shift', 'X*3', 'None', 'Move X hexes nowhere further from your engagers. You may reface.'),
    new Action('Equip', 'X', 'None', 'If X is at least 3, equip any weapon or item you have accessibly harnessed to your body. If X is at least 5, equip any weapon or item loose in same hex as you. If X is at least 10, equip any weapon or item in any container in the same hex as you (including your own inaccessible harness)'),
];
