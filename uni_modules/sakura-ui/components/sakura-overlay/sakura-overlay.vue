<template>
	<sakura-transition name="mask" mode-class="fade" :show="show" :styles="maskClass" :duration="duration">
		<slot></slot>
	</sakura-transition>
</template>

<script lang="ts" setup>
	import { computed, PropType, toRefs } from "vue";

	const props = defineProps({
		show: {
			type: Boolean as PropType<boolean>,
			default: false
		},
		zIndex: {
			type: [String, Number] as PropType<string | number>,
			default: 10000
		},
		duration: {
			type: Number as PropType<number>,
			default: 300
		},
		opacity: {
			type: [String, Number] as PropType<string | number>,
			default: 0.5
		}
	})

	const { show, zIndex, duration, opacity } = toRefs(props)

	const maskClass = computed(() => ({
		position: 'fixed',
		bottom: 0,
		top: 0,
		left: 0,
		right: 0,
		backgroundColor: `rgba(0, 0, 0, ${opacity.value})`,
		zIndex: zIndex.value,
	}))
</script>

<style lang="scss">
</style>
