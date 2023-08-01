import { number, object } from './test';

export { default as dayjs } from './dayjs.js';

export const getVal = (val: number | string) => {
	if (!val) return null;
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
type ClassName = string | undefined | null;
type Classes = (ClassName | [any, ClassName, ClassName?])[];
export const createNamespace = <C extends String>(name: C) => {
	const namespace = `sakura` as const;
	const componentName = `${namespace}-${name}` as const;

	const createBEM = <S extends string | undefined = undefined | any>(suffix?: S) => {
		if (!suffix) {
			return componentName as any;
		}

		if (suffix[0] === '$') {
			return suffix.replace('$', namespace) as any;
		}
		if (!suffix.startsWith('-') || !suffix.startsWith('--')) {
			return `${namespace}-${suffix}`;
		}

		return (suffix.startsWith('--') ? `${componentName}${suffix}` : `${componentName}__${suffix}`) as any;
	};

	const classes = (...classes: Classes): any[] => {
		return classes
			.map((className) => {
				if (Array.isArray(className)) {
					const [condition, truthy, falsy = null] = className;
					return condition ? truthy : falsy;
				}

				return className;
			})
			.filter((name) => name);
	};
	const getVar = (name: string) => {
		return `--${componentName}${name.startsWith('-') ? name : `-${name}`}`;
	};
	return {
		namespace,
		n: createBEM,
		classes,
		getVar,
	};
};

export const getStatusBarHeight = () => {
	const { statusBarHeight } = uni.getSystemInfoSync();
	return statusBarHeight;
};

export const getCustomNavTop = (val: number) => {
	const statusBarHeight = getStatusBarHeight();
	const height = val || uni.$sakura.config.navbar.height;
	return statusBarHeight + height + 'px';
};

export const getCustomDistance = (val: string | Array<string | number>) => {
	if (!val) return null;
	if (Array.isArray(val)) {
		return val.map((num) => getVal(num)).join(' ');
	}
	return getVal(val);
};

export { number, object };
