<template>
	<view :class="className" :style="stylesName">
		<text v-if="!dot" :class="classes(n('--text'))">
			{{text}}
		</text>
	</view>
</template>

<script lang="ts" setup>
	import { toRefs, computed } from "vue";
	const props = defineProps({
		//展示的数字
		value: {
			type: [String, Number]
		},
		//最大值，当值超过max时使用+号代替，仅为数字时有效，-1表示不限制
		max: {
			type: [String, Number],
			defult: '-1'
		},
		//类型
		type: {
			type: String,
			default: 'primary'
		},
		//背景色，如果设置背景色则type失效	
		background: {
			type: String
		},
		//字体颜色
		color: {
			type: String
		},
		//字体大小
		size: {
			type: String
		},
		//是否显示为圆点
		dot: {
			type: Boolean,
			default: false
		},
		absolute: {
			type: Boolean,
			default: false
		},
		top: {
			type: String,
			default: '-8rpx'
		},
		right: {
			type: String,
			default: '-18rpx'
		}
	})

	const { value, max, type, background, color, size, dot, absolute, top, right } = toRefs(props)

	const { n, classes } = uni.$sakura.utils.createNamespace('badge')

	const className = computed(() => classes(n(), n('--var'), [type.value, n(`--${type.value}`)],
		[absolute.value, n('--absolute')],
		[dot.value, n('--dot')]
	))

	const text = computed(() => {
		if (max.value !== '-1' && +value.value > +max.value) {
			return '99+'
		}
		return value.value
	})

	const stylesName = computed(() => ({
		background: background.value,
		color: color.value,
		size: uni.$sakura.utils.getVal(size.value),
		top: absolute.value ? uni.$sakura.utils.getVal(top.value) : null,
		right: absolute.value ? uni.$sakura.utils.getVal(right.value) : null
	}))
</script>

<style lang="scss">
	@import './sakura-badge.scss';

</style>
