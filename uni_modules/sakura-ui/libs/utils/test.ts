export const number = (value: string) => {
	return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
};

export const object = (value: any) => {
	return Object.prototype.toString.call(value) === '[object Object]';
};
