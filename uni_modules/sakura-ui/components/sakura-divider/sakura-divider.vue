<template>
	<view :class="className" :style="stylesName">
		<slot>
			<text :class="n('--text')" v-if="text&&!vertical">{{text}}</text>
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
	/**
	 * @description 分割线
	 * @property {String} text 分割线的文字描述	
	 * @property {Boolean} dashed 虚线
	 * @property {Boolean} hairline 是否细线
	 * @property {Boolean} vertical 是否垂直
	 */
	import { computed, PropType, toRefs } from "vue";

	const props = defineProps({
		text: {
			type: String as PropType<string>
		},
		//虚线	
		dashed: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		//是否细线
		hairline: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		//是否垂直
		vertical: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		//内容位置 //left right
		position: {
			type: String as PropType<string>
		},
		//文本大小
		textSize: {
			type: String as PropType<string>
		},
		//文本颜色
		textColor: {
			type: String as PropType<string>
		},
		//线条颜色
		lineColor: {
			type: String as PropType<string>
		},
		//距离
		margin: {
			type: [String, Number] as PropType<string | number>
		}
	})

	const { text, dashed, hairline, vertical, position, textSize, textColor, lineColor, margin } = toRefs(props)

	const { n, classes, getVar } = uni.$sakura.utils.createNamespace('divider')

	const className = computed(() => classes(n(), n('--var'),
		[vertical.value, n('--vertical')],
		[dashed.value, n('--dashed')],
		[hairline.value, n('--hairline')],
		[text.value, n('--with--text')],
		[position.value === 'left' || position.value === 'right', n(`--${position.value}`)]
	))


	const getLineColor = computed(() => {
		if (!lineColor.value) return {}
		return {
			[getVar('border-color')]: lineColor.value
		}
	})

	const stylesName = computed(() => ({
		color: textColor.value,
		fontSize: uni.$sakura.utils.getVal(textSize.value),
		margin: margin.value ? `${uni.$sakura.utils.getVal(margin.value)} 0 ${uni.$sakura.utils.getVal(margin.value)}` : '',
		...getLineColor.value
	}))
</script>

<style lang="scss">
	@import './sakura-divider.scss';

</style>
