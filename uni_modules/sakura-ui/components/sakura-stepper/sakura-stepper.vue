<template>
	<view :class="className">
		<slot name="min"></slot>

		<slot name="max"></slot>
	</view>
</template>

<script lang="ts" setup>
	import { computed } from "vue";
	const { n, classes } = uni.$sakura.utils.createNamespace('stepper')

	const className = computed(() => classes(n(), n('--var')))
</script>

<style lang="scss">
	@import './sakura-stepper.scss';

</style>
