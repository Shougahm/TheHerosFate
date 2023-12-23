function roll(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const rollOptions = {
	['2']:  ["d2"],
	['4']:  ["d4"],
	['6']:  ["d6"],
	['8']:  ["d8"],
	['10']: ["d8 + d2", "d6 + d4"],
	['12']: ["2d6", "d8 + d4"],
	['14']: ["d8 + d6"],
	['16']: ["2d8"],
	['18']: ["2d8 + d2", "d8 + d6 + d4", "2d6 + d2"],
	['20']: ["2d8 + d4", "d8 + 2d6"],
	['22']: ["2d8 + d6", "3d6 + d4"],
	['24']: ["3d8"],
	['26']: ["3d8 + d2", "3d6 + d8"],
}

export function PWR(pwr) {
	let options = rollOptions[pwr *2];
	if (options == null) {
		throw new Error(`Power higher than ${pwr} not supported.`);
	}
	return options;
}

export function check() {
	return (roll(1, 12) - roll(1, 12));
}
