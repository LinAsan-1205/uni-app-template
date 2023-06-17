import { number } from './test';

export { default as dayjs } from './dayjs.js';

export const getVal = (val: number | string) => {
	const reg = /^[0-9]*$/g;
	return typeof val === 'number' || reg.test(val) ? val + 'rpx' : val;
};

export const getPx = (value: any, unit = false) => {
	if (number(value)) {
		return unit ? `${value}px` : Number(value);
	}
	// 如果带有rpx，先取出其数值部分，再转为px值
	if (/(rpx|upx)$/.test(value)) {
		return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)));
	}
	return unit ? `${parseInt(value)}px` : parseInt(value);
};
/**
 * 获取var
 */
export const getVar = (name: string) => {
	return `var(--${uni.$sakura.config.className})-${name}`;
};

export { number };
