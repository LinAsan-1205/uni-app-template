<template>
	<!-- #ifdef APP-NVUE -->
	<text :style="styleName" class="sakura-icon">{{ unicode }}</text>
	<!-- #endif -->
	<!-- #ifndef APP-NVUE -->
	<text :style="styleName" :class="className"> </text>
	<!-- #endif -->
</template>
<script lang="ts" setup>
	import { PropType, toRefs, computed } from "vue";
	import icons from "./sakura-icon";
	// #ifdef APP-NVUE
	var domModule = weex.requireModule("dom");
	import iconUrl from "./sakura-icon.ttf";
	domModule.addRule("fontFace", {
		fontFamily: "l",
		src: "url('" + iconUrl + "')",
	});
	// #endif
	const props = defineProps({
		name: {
			type: String as PropType<string>,
			default: "",
		},
		color: {
			type: String as PropType<string>,
			default: "#333333",
		},
		/**
		 * 图标大小
		 * @desc 可以使用字符串 例如32rpx 或者数字 32
		 */
		size: {
			type: [Number, String] as PropType<number | string>,
			default: 16,
		},
		customPrefix: {
			type: String as PropType<string>,
			default: "",
		},
	});
	const { color, size, name, customPrefix } = toRefs(props);
	const getFontSizeVal = (val : number | string) => {
		const reg = /^[0-9]*$/g;
		return typeof val === "number" || reg.test(val) ? val + "px" : val;
	};
	const unicode = computed(() => {
		const code = (icons as Record<string, string>)[name.value];

		if (code) {
			return unescape(`%u${code}`);
		}
		return "";
	});
	const className = computed(() => {
		if (customPrefix.value) {
			return [customPrefix.value, customPrefix.value + name.value];
		}
		return ["sakura-icon", "sakura-" + name.value];
	});

	const styleName = computed(() => ({
		color: color.value,
		"font-size": getFontSizeVal(size.value),
	}));
</script>
<style lang="scss" scoped>
	/* #ifndef APP-NVUE */
	@import "./sakura-icon.css";

	@font-face {
		font-family: sakura;
		src: url("./sakura-icon.ttf") format("truetype");
	}

	/* #endif */
	.sakura-icon {
		font-family: sakura;
		text-decoration: none;
		text-align: center;
	}

</style>
