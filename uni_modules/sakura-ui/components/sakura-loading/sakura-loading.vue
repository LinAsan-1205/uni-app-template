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
<!-- #ifdef MP-WEIXIN -->
<script lang="ts">
	export default {
		options: { virtualHost: true }
	}
</script>
<!-- #endif -->
<script setup lang="ts">
	import { computed, toRefs } from 'vue'
	const props = defineProps({
		type: {
			type: String,
			default: 'default'
		},
		mode: {
			type: String,
			default: 'default'
		},
		text: {
			type: String,
			default: ''
		},
		size: {
			type: [String, Number],
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
