<template>
	<view :class="classes(n())" :style="styles"></view>
</template>
<!-- #ifdef MP-WEIXIN -->
<script lang="ts">
	export default {
		options: { virtualHost: true }
	}
</script>
<!-- #endif -->
<script lang="ts" setup>
	import { computed } from "vue";

	const props = defineProps({
		background: {
			type: String,
			default: 'transparent'
		}
	})

	const { n, classes } = uni.$sakura.utils.createNamespace('status')

	const styles = computed(() => {
		const statusBarHeight = uni.$sakura.utils.getStatusBarHeight()
		return {
			height: statusBarHeight + 'px',
			background: props.background
		}
	})
</script>

<style lang="scss">
	@import './sakura-status-bar.scss';

</style>
