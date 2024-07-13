import { PIBY180 } from './constants';

const clamp = (value: number, min: number, max: number): number =>
	Math.min(Math.max(value, min), max);

const toFixed = (value: any, fractionDigits = 2): number => {
	const _value = parseFloat(value) || 0;
	return Math.round(_value * 10 ** fractionDigits) / 10 ** fractionDigits || 0;
};

const deg2Rad = (degree: number): number => degree * PIBY180;

const rad2Deg = (degree: number): number => degree / PIBY180;

const randInt = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const uniqueId = (prefix?: string): string => {
	const pf = prefix ? prefix + '-' : '';
	const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let str = '',
		i;

	for (i = 0; i < 12; i++) {
		str += charset[randInt(0, charset.length - 1)];
	}

	return pf + str;
};

export { clamp, toFixed, deg2Rad, rad2Deg, randInt, uniqueId };
