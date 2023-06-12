<template>
	<view :class="className" :style="styleName">
		<slot />
	</view>
</template>
<script lang="ts" setup>
	import { computed, CSSProperties, PropType, toRefs } from "vue";
	import { getVal } from "../../libs/utils";
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
		marginTop: {
			type: [String, Number] as PropType<string | number>,
			default: 0,
		},
		marginBottom: {
			type: [String, Number] as PropType<string | number>,
			default: 20,
		},
	});
	const {
		size,
		inline,
		vertical,
		align,
		wrap,
		justify,
		marginBottom,
		marginTop,
	} = toRefs(props);
	const className = computed(() => ({}));
	const styleName = computed<CSSProperties>(() => ({
		display: inline.value ? "inline-flex" : "flex",
		"flex-direction": vertical.value ? "column" : "row",
		justifyContent: ["start", "end"].includes(justify.value)
			? "flex-" + justify.value
			: justify.value,
		flexWrap: !wrap.value || vertical.value ? "nowrap" : "wrap",
		alignItems: align.value,
		gap: getVal(size.value),
		marginBottom: getVal(marginBottom.value),
		marginTop: getVal(marginTop.value),
	}));
</script>
