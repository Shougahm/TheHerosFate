function roll(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
export function PWR(pwr) {
	let a = Math.trunc(pwr / 4);

	if (a == 0) {
		a = "";
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
export function check() {
	return (roll(1, 12) - roll(1, 12));
}
