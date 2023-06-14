<template>
	<view :class="className">
		<view class="sakura-loading--animation" :style="animationStlye">
			<template v-if="mode==='default'">
				<div class="sakura-loading--percent"></div>
				<div class="sakura-loading--animation--1"></div>
				<div class="sakura-loading--animation--2"></div>
				<div class="sakura-loading--animation--3"></div>
			</template>
		</view>
		<view class="sakura-loading--text" v-if="text">
			{{text}}
		</view>
	</view>
</template>

<script setup lang="ts">
	import { computed, toRefs, PropType } from 'vue'
	const props = defineProps({
		type: {
			type: String as PropType<string>,
			default: 'default'
		},
		mode: {
			type: String as PropType<string>,
			default: 'default'
		},
		text: {
			type: String as PropType<string>,
			default: ''
		},
		size: {
			type: [String, Number] as PropType<string | number>,
			default: 60
		},
	})
	const { type, mode, text, size } = toRefs(props)
	const className = computed(() => ({
		['sakura-loading']: true,
		['sakura-loading--vars']: true,
		[`sakura-loading--${mode.value}`]: true,
		[`sakura-loading-type--${type.value}`]: true
	}))
	const animationStlye = computed(() => ({
		width: uni.$sakura.utils.getVal(size.value),
		height: uni.$sakura.utils.getVal(size.value),
	}))
</script>

<style scoped lang="scss">
	@import './sakura-loading.scss';

</style>
