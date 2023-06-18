<template>
	<view :class="className" :style="stylesName" @click="onClick">
		<slot>
			{{text}}
		</slot>
	</view>
</template>

<script lang="ts" setup>
	import { computed, toRefs } from "vue";

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
			type: [String, Array],
			default: []
		},
		index: {
			type: Number,
			default: 0
		}
	})

	const { text, type, plain, color, size, radius, background, borderColor, light, padding, index } = toRefs(props)

	const { n, classes } = uni.$sakura.utils.createNamespace('tag')

	const className = computed(() => classes(n(), n('--var'), n(`--${type.value}`),
		[!background.value && plain.value, n(`--${type.value}--plain`)],
		[!background.value && light.value, n(`--${type.value}--light`)]

	))
	const getPadding = computed(() => Array.isArray(padding.value) ? padding.value.filter(name => name).map(name => uni.$sakura.utils.getVal(name)).join(' ') : `${padding.value}`)

	const stylesName = computed(() => ({
		borderRadius: uni.$sakura.utils.getVal(radius.value),
		color: color.value,
		background: background.value,
		fontSize: uni.$sakura.utils.getVal(size.value),
		borderColor: !borderColor.value ? background.value : borderColor.value,
		padding: getPadding.value
	}))
	const onClick = () => {
		emit('click', index.value)
	}
</script>

<style lang="scss">
	@import './sakura-tag.scss';

</style>
