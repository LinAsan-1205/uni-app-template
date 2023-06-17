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


type ClassName = string | undefined | null
type Classes = (ClassName | [any, ClassName, ClassName?])[]
type BEM<S extends string | undefined, N extends string, NC extends string> = S extends undefined
  ? NC
  : S extends `$--${infer CM}`
  ? `${N}--${CM}`
  : S extends `--${infer M}`
  ? `${NC}--${M}`
  : `${NC}__${S}`

export const createNamespace = <C extends String>(name: C) => {
	const namespace = `sakura` as const;
	const componentName = `${namespace}-${name}` as const;

	const createBEM = <S extends string | undefined = undefined>(suffix?: S): BEM<S, typeof namespace, typeof componentName> => {
		if (!suffix) {
			return componentName as any;
		}

		if (suffix[0] === '$') {
			return suffix.replace('$', namespace) as any;
		}

		return (suffix.startsWith('--') ? `${componentName}${suffix}` : `${componentName}__${suffix}`) as any;
	};
	
		const classes = (...classes: Classes): any[] => {
	    return classes.map((className) => {
	      if (Array.isArray(className)) {
	        const [condition, truthy, falsy = null] = className
	        return condition ? truthy : falsy
	      }
	
	      return className
	    })
		
	  }
	return {
	namespace,
    n: createBEM,
    classes,
  }
};

export { number };
