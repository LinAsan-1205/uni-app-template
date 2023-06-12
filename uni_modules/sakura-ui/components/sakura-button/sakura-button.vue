<template>
	<button :class="className" :style="stylesName" :openType="openType" :loading="loading" @tap="handleClick"
		@getphonenumber="handleGetPhoneNumber" @getuserinfo="handleGetUserInfo" @contact="handleContact"
		@error="handleError">
		<view class="sakura-button-content" :style="contentStyle">
			<template v-if="slots.default">
				<slot />
			</template>
			<view v-else class=""></view>
		</view>
		<view v-if="disabled" :style="disabledStyle" @click.stop class="sakura-button--disabled"></view>
	</button>
</template>
<script lang="ts" setup>
	import { computed, PropType, toRefs, useSlots } from 'vue';
	import { getVal } from '../../libs/utils';
	const emit = defineEmits(['click', 'tap', 'getPhoneNumber', 'getUserInfo', 'contact', 'error']);
	const props = defineProps({
		/**
		 * 类型
		 * @desc primary / success / warning / danger / info / text
		 */
		type: {
			type: String as PropType<string>,
			default: 'default'
		},
		/**
		 * 是否朴素按钮
		 * @desc false
		 */
		plain: {
			type: Boolean as PropType<boolean>,
			default: false
		},
		/**
		 * 是否禁用状态
		 * @desc false
		 */
		disabled: {
			type: Boolean as PropType<boolean>,
			default: false
		},
		/**
		 * 按钮禁用背景色
		 * @desc false
		 */
		disabledBackground: {
			type: String as PropType<string>,
			default: null
		},
		//按钮禁用字体颜色
		disabledColor: {
			type: String as PropType<string>,
			default: null
		},
		//阴影
		shadow: {
			type: Boolean as PropType<boolean>,
			default: false
		},
		//阴影颜色
		shadowColor: {
			type: String as PropType<string>,
			default: null
		},
		//字体大小
		fontSize: {
			type: [String, Number] as PropType<string | number>,
			default: 32
		},
		//字体颜色
		color: {
			type: String as PropType<string>,
			default: null
		},
		//圆角
		round: {
			type: Boolean as PropType<boolean>,
			default: true
		},
		//圆角大小
		roundSize: {
			type: [String, Number] as PropType<string | number>,
			default: 10
		},
		//自定义颜色
		bgColor: {
			type: String as PropType<string>,
			default: ''
		},
		//加载
		loading: {
			type: Boolean as PropType<boolean>,
			default: false
		},
		//高度
		height: {
			type: [String, Number] as PropType<string | number>,
			default: 100
		},
		//宽度
		width: {
			type: [String, Number] as PropType<string | number>,
			default: null
		},
		//将组件的宽度更改为父元素确定的可能总数。	
		block: {
			type: Boolean as PropType<boolean>,
			default: false
		},

		//确定组件是否只包含一个图标，通过添加此属性组件具有相等的宽度和高度。
		icon: {
			type: Boolean as PropType<boolean>,
			default: false
		},
		iconRadius: {
			type: [String, Number] as PropType<string | number>,
			default: 30
		},
		//开放能力
		openType: {
			type: String as PropType<string>,
			default: ''
		},
		//触发form表单的事件类型
		formType: {
			type: String as PropType<string>,
			default: ''
		}
	});
	const slots = useSlots();
	const { type: buttonType, plain, disabled, disabledBackground, disabledColor, fontSize, round, roundSize, loading, height, width, block, icon, iconRadius, openType, bgColor, color, shadow, shadowColor } = toRefs(props);

	const buttonRadius = computed(() => round.value && roundSize.value);
	const borderRadiusSize = computed(() => buttonRadius.value && getVal(roundSize.value));
	const className = computed(() => ({
		'sakura-button': true,
		[`sakura-button--${buttonType.value}`]: buttonType.value && true,
		['sakura-button--round']: round.value,
		['sakura-button--round--size']: buttonRadius.value,
		['sakura-button--round--border']: buttonType.value == 'default',
		['sakura-button--text']: buttonType.value == 'text',
		['sakura-button--plain']: plain.value || false,
		['sakura-button--vars']: true,
		['sakura-button--border']: bgColor.value,
		['sakura-button--shadow']: buttonType.value && shadow.value && !plain.value,
		['sakura-button--block']: block.value,
		['sakura-button--icon']: icon.value
	}));
	const heightStyle = computed(() => {
		if (icon.value) {
			return {
				height: 'auto',
				lineHeight: 'normal'
			}
		}
		return {
			height: getVal(height.value),
			lineHeight: getVal(height.value),
		}
	})
	const stylesName = computed(() => ({
		...heightStyle.value,
		width: width.value ? getVal(width.value) : null,
		borderRadius: icon.value ? getVal(iconRadius.value) : borderRadiusSize.value,
		background: bgColor.value,
		boxShadow: shadow.value && shadowColor.value && !plain.value
	}));
	const contentStyle = computed(() => ({
		color: disabled.value ? disabledColor.value : color.value,
		fontSize: icon.value ? 'auto' : getVal(fontSize.value),
	}))
	const disabledStyle = computed(() => ({
		backgroundColor: disabledBackground.value
	}))
	const handleClick = (e : Event) => {
		emit('click', e);
		emit('tap', e);
	};
	const handleGetPhoneNumber = ({ detail = {} } = {}) => {
		emit('getPhoneNumber', detail);
	};
	const handleGetUserInfo = ({ detail = {} } = {}) => {
		emit('getUserInfo', detail);
	};
	const handleContact = ({ detail = {} } = {}) => {
		emit('contact', detail);
	};
	const handleError = (e : any) => {
		emit('error', e);
	};
</script>
<style lang="scss" scoped>
	@import './sakura-button.scss';

</style>
