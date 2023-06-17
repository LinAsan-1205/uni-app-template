<template>
	<view :class="className"></view>
</template>

<script lang="ts" setup>
	import { computed } from "vue";
	const { n, classes } = uni.$sakura.utils.createNamespace('cell')
	const className = computed(() => classes(n()))
</script>

<style lang="scss">
	@import './sakura-cell.scss';

</style>
