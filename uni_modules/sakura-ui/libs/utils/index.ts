export { default as dayjs } from './dayjs.js';
export const getVal = (val: number | string) => {
	const reg = /^[0-9]*$/g;
	return typeof val === 'number' || reg.test(val) ? val + 'rpx' : val;
};
