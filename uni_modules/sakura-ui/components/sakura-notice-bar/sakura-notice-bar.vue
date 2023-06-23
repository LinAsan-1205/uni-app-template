<template>
	<view :class="className"></view>
</template>


<!-- #ifdef MP-WEIXIN -->
<script lang="ts">
	export default {
		options: { virtualHost: true }
	}
</script>
<!-- #endif -->
<script setup lang="ts">
	import { computed } from "vue";

	const { n, classes } = uni.$sakura.utils.createNamespace('notice')

	const className = computed(() => classes(n(), n('--var')))
</script>

<style lang="scss">
	@import './sakura-notice-bar.scss';

</style>
