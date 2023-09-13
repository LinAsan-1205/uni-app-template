<template>
	<view :class="className">
		<slot name="min">
			<view :class="n('--left')"></view>
		</slot>

		<slot name="max">
			<view :class="n('--right')"></view>
		</slot>
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
