type ClassName = string | undefined | null;
type Classes = (ClassName | [any, ClassName, ClassName?])[];
interface SakuraUi {
	//全局配置
	config: {
		className: string;
		navbar: {
			height: number;
			isClickHome: boolean;
			defaultNavBarPath: string;
		};
	};
	//工具
	utils: {
		createNamespace: <C extends String>(
			name: C
		) => {
			namespace: string;
			n: (suffix?: string) => string;
			classes: (...classes: Classes) => Array<string | null | undefined | number>;
			getVar: (name: string) => string;
		};
		getStatusBarHeight: () => number;
		getCustomNavTop: () => string;
		getCustomDistance: () => string;
		getVal: (val: number | string) => null | string;
		getPx: (value: any, unit?: boolean) => string;
	};
}

declare interface Uni {
	$sakura: SakuraUi;
}
