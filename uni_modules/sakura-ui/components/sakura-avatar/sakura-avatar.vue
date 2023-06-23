<template>
	<view
		:class="classes(n(), n('--var'), [sizeValidator, n(`--${size}`)], [round, n('--round')], [bordered, n('--bordered')])"
		:style="stylesName">
		<template v-if="src">
			<image v-if="!imageError" :src="src" :mode="mode" :lazy-load="lazy" @error="onError"></image>
			<image v-else :src="error" :mode="mode"></image>
		</template>
		<template v-else>
			<text class="sakura-avatar--text">
				{{text}}
			</text>
		</template>
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
	import { computed, ref, toRefs } from 'vue'

	const emit = defineEmits(['onError'])

	const props = defineProps({
		//头像是否为圆形	
		round: {
			type: Boolean,
			default: true
		},
		//头像的尺寸，可选值为 mini small normal large	
		size: {
			type: [String, Number],
			default: 'default'
		},
		//头像的背景颜色	
		color: {
			type: String,
			default: null
		},
		//头像的地址	
		src: {
			type: String,
			default: null
		},
		//文字头像
		text: {
			type: String,
			default: null
		},
		//文字颜色
		textColor: {
			type: String
		},
		//文字大小
		textSize: {
			type: String
		},
		//头像是否带边框	
		bordered: {
			type: Boolean,
			default: false
		},
		//头像边框颜色
		borderedColor: {
			type: String,
			default: null
		},
		//头像图片的裁剪类型
		mode: {
			type: String,
			default: 'scaleToFill'
		},
		//是否开启懒加载
		lazy: {
			type: Boolean,
			default: false
		},
		//图片加载失败
		error: {
			type: String,
			default: null
		}
	})

	const { size, round, color, src, mode, lazy, text, textColor, textSize, bordered, borderedColor } = toRefs(props)

	const imageError = ref(false)

	const sizeValidator = computed(() => ['mini', 'small', 'default', 'large'].includes(size.value as any))

	const { n, classes } = uni.$sakura.utils.createNamespace('avatar')

	const stylesName = computed(() => {
		let styles = {}
		if (!src.value && color.value) {
			styles['backgroundColor'] = color.value
		}
		if (!src.value && textColor.value) {
			styles['color'] = textColor.value
		}
		if (bordered.value && borderedColor.value) {
			styles['borderColor'] = borderedColor.value
		}
		if (!src.value && textSize.value) {
			styles['fontSize'] = uni.$sakura.utils.getVal(textSize.value)
		}
		return styles
	})

	const onError = (event : any) => {
		imageError.value = true
		emit('onError', event)
	}
</script>

<style lang="scss">
	@import './sakura-avatar.scss';

</style>
