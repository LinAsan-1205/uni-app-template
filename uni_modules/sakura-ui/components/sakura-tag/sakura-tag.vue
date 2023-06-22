<template>
	<view :class="className" :style="stylesName" @click="onClick">
		<slot>
			{{text}}
		</slot>
	</view>
</template>
<!-- #ifdef MP-WEIXIN -->
<script lang="ts">
	export default {
		options: { virtualHost: true }
	}
</script>
<!-- #endif -->
<script lang="ts" setup>
	import { computed, toRefs, PropType } from "vue";

	const emit = defineEmits(['click'])

	const props = defineProps({
		//标签文本	
		text: {
			type: String
		},
		//标签类型
		type: {
			type: String,
			default: 'primary'
		},
		//空心
		plain: {
			type: Boolean,
			default: false
		},
		light: {
			type: Boolean,
			default: false
		},
		//标签文字颜色
		color: {
			type: String
		},
		//自定义背景颜色
		background: {
			type: String
		},
		//标签边框颜色	
		borderColor: {
			type: String
		},
		//标签字体大小，单位rpx
		size: {
			type: String,
			default: '24rpx'
		},
		//标签圆角值，单位rpx
		radius: {
			type: String,
			default: '8rpx'
		},
		padding: {
			type: [String, Array] as PropType<string | string[]>,
			default: () => []
		},
		margin: {
			type: [String, Array] as PropType<string | string[]>,
			default: () => []
		},
		index: {
			type: Number,
			default: 0
		}
	})

	const { text, type, plain, color, size, radius, background, borderColor, light, padding, margin, index } = toRefs(props)

	const { n, classes } = uni.$sakura.utils.createNamespace('tag')

	const className = computed(() => classes(n(), n('--var'), n(`--${type.value}`),
		[!background.value && plain.value, n(`--${type.value}--plain`)],
		[!background.value && light.value, n(`--${type.value}--light`)]

	))
	const distance = (data : string | string[]) => {
		if (!data) return null
		return Array.isArray(data) ? data.filter(name => name).map(name => uni.$sakura.utils.getVal(name)).join(' ') : `${data}`
	}

	const stylesName = computed(() => ({
		borderRadius: uni.$sakura.utils.getVal(radius.value),
		color: color.value,
		background: background.value,
		fontSize: uni.$sakura.utils.getVal(size.value),
		borderColor: !borderColor.value ? background.value : borderColor.value,
		padding: distance(padding.value),
		margin: distance(margin.value)
	}))
	const onClick = () => {
		emit('click', index.value)
	}
</script>

<style lang="scss">
	@import './sakura-tag.scss';

</style>
