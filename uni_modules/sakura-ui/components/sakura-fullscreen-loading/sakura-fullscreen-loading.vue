<template>
	<view :class="className" :style="styles" v-if="loading">
		<sakura-loading :text="text"></sakura-loading>
	</view>
</template>

<script lang="ts" setup>
	import { computed, toRefs } from 'vue'

	const props = defineProps({
		loading: {
			type: Boolean,
			default: false
		},
		text: {
			type: String,
			default: '加载中...'
		},
		zIndex: {
			type: [Number, String],
			default: 9999
		},
		background: {
			type: String,
			default: 'rgba(255,255,255,.6)'
		}
	})

	const { loading, text, zIndex, background } = toRefs(props)

	const { n, classes } = uni.$sakura.utils.createNamespace('fullscreen-loading')

	const className = computed(() => classes(n(), n('--var')))

	const styles = computed(() => ({
		zIndex: zIndex.value,
		background: background.value
	}))
</script>

<style lang="scss">
	@import './sakura-fullscreen-loading.scss';

</style>
