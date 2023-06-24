<template>
	<!-- #ifdef APP-NVUE -->
	<text :style="styleName" :class="classes(n())">{{ unicode }}</text>
	<!-- #endif -->
	<!-- #ifndef APP-NVUE -->
	<text :style="styleName" :class="className"> </text>
	<!-- #endif -->
</template>

<!-- #ifdef MP-WEIXIN -->
<script lang="ts">
	export default {
		options: { virtualHost: true }
	}
</script>
<!-- #endif -->
<script lang="ts" setup>
	import { toRefs, computed } from "vue";
	import icons from "./icon";

	const iconUrl = 'https://at.alicdn.com/t/c/font_3519791_ntt7oqnazys.ttf'
	// #ifdef APP-NVUE
	var domModule = weex.requireModule("dom");
	domModule.addRule("fontFace", {
		fontFamily: "sakura",
		src: "url('" + iconUrl + "')",
	});
	// #endif
	const props = defineProps({
		name: {
			type: String,
			default: "",
		},
		color: {
			type: String,
			default: "#333333",
		},
		/**
		 * 图标大小
		 * @desc 可以使用字符串 例如32rpx 或者数字 32
		 */
		size: {
			type: [Number, String],
			default: 16,
		},
		customPrefix: {
			type: String,
			default: "",
		},
	});
	const { color, size, name, customPrefix } = toRefs(props);

	const { n, classes } = uni.$sakura.utils.createNamespace('icon')

	const getFontSizeVal = (val : number | string) => {
		const reg = /^[0-9]*$/g;
		return typeof val === "number" || reg.test(val) ? val + "px" : val;
	};
	const unicode = computed(() => {
		const iconInfo = icons.glyphs.find(item => item.font_class === name.value)
		if (iconInfo.unicode) {
			return unescape(`%u${iconInfo.unicode}`);
		}
		return "";
	});
	const className = computed(() => {
		if (customPrefix.value) {
			return [customPrefix.value, customPrefix.value + name.value];
		}
		return classes(n(), n(name.value))
	});

	const styleName = computed(() => ({
		color: color.value,
		"font-size": getFontSizeVal(size.value),
	}));
</script>
<style lang="scss">
	/* #ifndef APP-NVUE */
	@import "./sakura-icon.css";

	@font-face {
		font-family: sakura;
		src: url(https://at.alicdn.com/t/c/font_3519791_ntt7oqnazys.ttf) format("truetype");
	}

	/* #endif */
	.sakura-icon {
		font-family: sakura;
		text-decoration: none;
		text-align: center;
		position: relative;
		display: inline-block;
		font-size: inherit;
		font-weight: 400;
		font-style: normal;
		line-height: 1;
	}

</style>
