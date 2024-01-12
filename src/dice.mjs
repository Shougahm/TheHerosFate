export function roll(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function PWR(power) {
	power *= 2;

    let result = [];
    let d8s = Math.floor(power / 8);
    let d6s = 0;

    if (d8s < 1) {
        return 'd' + power % 8;
    } else if (power == 10) {
        return 'd6 + d4';
    } else if (power % 8 == 6) {
        d6s = 1;
    } else if (power % 8 == 4) {
        d6s = 2;
    } else if (power % 8 == 2) {
        d6s = 3;
    }
    d8s = Math.floor((power - d6s*6) / 8);

    if (d8s > 0) { result.push(d8s > 1 ? `${d8s}d8` : 'd8'); }
    if (d6s > 0) { result.push(d6s > 1 ? `${d6s}d6` : 'd6'); }

    return result.join(' + ');
}


export function check() {
	return (roll(1, 12) - roll(1, 12));
}