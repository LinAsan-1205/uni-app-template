<template>
	<view :class="className" :style="styleName">
		<slot />
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
	import { computed, CSSProperties, PropType, toRefs } from "vue";
	const props = defineProps({
		size: {
			type: [Number, String] as PropType<number | string>,
			default: 16,
		},
		inline: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		vertical: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		align: {
			type: String as PropType<
				| "stretch"
				| "baseline"
				| "start"
				| "end"
				| "center"
				| "flex-end"
				| "flex-start"
			>,
			default: "",
		},
		justify: {
			type: String as PropType<
				| "start"
				| "end"
				| "center"
				| "space-around"
				| "space-between"
				| "space-evenly"
			>,
			default: "start",
		},
		wrap: {
			type: Boolean as PropType<boolean>,
			default: true,
		},
		margin: {
			type: [String, Number, Array] as PropType<string | number | number[]>,
			default: 0,
		},
	});
	const {
		size,
		inline,
		vertical,
		align,
		wrap,
		justify,
		margin,
	} = toRefs(props);
	const className = computed(() => ({}));
	const getMargin = computed(() => {
		if (Array.isArray(margin.value)) {
			return margin.value.map(num => uni.$sakura.utils.getVal(num)).join(' ')
		}
		const num = uni.$sakura.utils.getVal(margin.value)
		return `${num} ${num}`
	})
	const styleName = computed<CSSProperties>(() => ({
		display: inline.value ? "inline-flex" : "flex",
		"flex-direction": vertical.value ? "column" : "row",
		justifyContent: ["start", "end"].includes(justify.value)
			? "flex-" + justify.value
			: justify.value,
		flexWrap: !wrap.value || vertical.value ? "nowrap" : "wrap",
		alignItems: align.value,
		gap: uni.$sakura.utils.getVal(size.value),
		margin: getMargin.value
	}));
</script>
