<template>
	<button :class="classes(n(), n('--var'),
		[buttonType && true, n(`--${buttonType}`)],
		[round, n('--round')],
		[buttonRadius, n('--round--size')],
		[buttonType === 'default', n('round--border')],
		[buttonType === 'text', n('--text')],
		[plain || false, n('--plain')],
		[bgColor, n('--border')],
		[buttonType && shadow && !plain, n('--shadow')],
		[block, n('--block')],
		[icon, n('--icon')]
	)" :style="stylesName" :openType="openType" @tap="bindClick" @getphonenumber="bindGetPhoneNumber"
		@agreeprivacyauthorization="agreeprivacyauthorization" @getuserinfo="bindGetuserinfo" @contact="bindContact"
		@error="bindError">
		<view class="sakura-button-content" :style="contentStyle">
			<template v-if="slots.default">
				<slot />
			</template>
			<template v-else>
				{{text}}
			</template>
		</view>
		<view v-if="loading" @click.stop class="sakura-button--loading">
			<sakura-loading :size="loadingSize" type="white"></sakura-loading>
		</view>
		<view v-if="disabled" :style="disabledStyle" @click.stop class="sakura-button--disabled"></view>
	</button>
</template>
<!-- #ifdef MP-WEIXIN -->
<script lang="ts">
	export default {
		options: { virtualHost: true }
	}
</script>
<!-- #endif -->
<script lang="ts" setup>
	import { computed, onMounted, toRefs, useSlots } from 'vue';
	const emit = defineEmits(['click', 'tap', 'getPhoneNumber', 'getUserInfo', 'contact', 'error', 'agreeprivacyauthorization']);
	const props = defineProps({
		text: {
			type: String,
			default: null
		},
		/**
		 * 类型
		 * @desc primary / success / warning / danger / info / text
		 */
		type: {
			type: String,
			default: 'default'
		},
		/**
		 * 是否朴素按钮
		 * @desc false
		 */
		plain: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否禁用状态
		 * @desc false
		 */
		disabled: {
			type: Boolean,
			default: false
		},
		/**
		 * 按钮禁用背景色
		 * @desc false
		 */
		disabledBackground: {
			type: String,
			default: null
		},
		//按钮禁用字体颜色
		disabledColor: {
			type: String,
			default: null
		},
		//阴影
		shadow: {
			type: Boolean,
			default: false
		},
		//阴影颜色
		shadowColor: {
			type: String,
			default: null
		},
		//字体大小
		fontSize: {
			type: [String, Number],
			default: 28
		},
		//字体颜色
		color: {
			type: String,
			default: null
		},
		//圆角
		round: {
			type: Boolean,
			default: true
		},
		//圆角大小
		roundSize: {
			type: [String, Number],
			default: 6
		},
		//自定义颜色
		bgColor: {
			type: String,
			default: ''
		},
		//加载
		loading: {
			type: Boolean,
			default: false
		},
		loadingSize: {
			type: Number,
			default: 45
		},
		//高度
		height: {
			type: [String, Number],
			default: 80
		},
		//宽度
		width: {
			type: [String, Number],
		},
		//将组件的宽度更改为父元素确定的可能总数。	
		block: {
			type: Boolean,
			default: false
		},

		//确定组件是否只包含一个图标，通过添加此属性组件具有相等的宽度和高度。
		icon: {
			type: Boolean,
			default: false
		},
		//icon圆角
		iconRadius: {
			type: [String, Number],
			default: 30
		},
		//icon大小
		iconSize: {
			type: [String, Number],
			default: 60
		},
		//开放能力
		openType: {
			type: String,
			default: ''
		},
		//触发form表单的事件类型
		formType: {
			type: String,
			default: ''
		}
	});
	const slots = useSlots();

	const { text, type: buttonType, plain, disabled, disabledBackground, disabledColor, fontSize, round, roundSize, loading, loadingSize, height, width, block, icon, iconRadius, iconSize, openType, bgColor, color, shadow, shadowColor } = toRefs(props);

	const { n, classes } = uni.$sakura.utils.createNamespace('button')

	const buttonRadius = computed(() => round.value && roundSize.value);

	const borderRadiusSize = computed(() => buttonRadius.value && uni.$sakura.utils.getVal(roundSize.value));

	const getHeight = computed(() => {
		if (icon.value) {
			return {
				height: uni.$sakura.utils.getVal(iconSize.value),
				lineHeight: 'normal'
			}
		}
		return {
			height: uni.$sakura.utils.getVal(height.value),
			lineHeight: uni.$sakura.utils.getVal(height.value),
		}
	})
	const getWidth = computed(() => {
		if (iconSize.value && !iconSize.value || !width.value) {
			return {}
		}
		if (icon.value) {
			return {
				width: uni.$sakura.utils.getVal(iconSize.value)
			}
		}
		return {
			width: uni.$sakura.utils.getVal(width.value)
		}
	})
	const stylesName = computed(() => ({
		...getHeight.value,
		...getWidth.value,
		borderRadius: icon.value ? uni.$sakura.utils.getVal(iconRadius.value) : borderRadiusSize.value,
		background: bgColor.value,
		boxShadow: shadow.value && shadowColor.value && !plain.value
	}));
	const contentStyle = computed(() => ({
		color: disabled.value ? disabledColor.value : color.value,
		fontSize: icon.value ? 'auto' : uni.$sakura.utils.getVal(fontSize.value),
	}))
	const disabledStyle = computed(() => ({
		backgroundColor: disabledBackground.value
	}))
	const bindClick = (e : Event) => {
		emit('click', e);
		emit('tap', e);
	};
	const bindGetPhoneNumber = ({ detail = {} } = {}) => {
		emit('getPhoneNumber', detail);
	};
	const bindGetuserinfo = ({ detail = {} } = {}) => {
		emit('getUserInfo', detail);
	};
	const agreeprivacyauthorization = ({ detail = {} } = {}) => {
		emit('agreeprivacyauthorization', detail);
	}
	const bindContact = ({ detail = {} } = {}) => {
		emit('contact', detail);
	};
	const bindError = (e : any) => {
		emit('error', e);
	};
	onMounted(() => {
		if (icon.value) {

		}
	})
</script>
<style lang="scss" scoped>
	@import './sakura-button.scss';

</style>
