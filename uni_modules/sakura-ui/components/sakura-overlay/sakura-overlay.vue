<template>
	<sakura-transition @click="onClick" name="mask" mode-class="fade" :show="show" :styles="maskStyle"
		:duration="duration">
		<slot></slot>
	</sakura-transition>
</template>
<!-- #ifdef MP-WEIXIN -->
<script lang="ts">
	export default {
		options: { virtualHost: true }
	}
</script>
<!-- #endif -->
<script lang="ts" setup>
	import { computed, toRefs } from "vue";

	const emit = defineEmits(['click'])

	const props = defineProps({
		show: {
			type: Boolean,
			default: false
		},
		zIndex: {
			type: [String, Number],
			default: 10000
		},
		duration: {
			type: Number,
			default: 300
		},
		opacity: {
			type: [String, Number],
			default: 0.5
		},
		background: {
			type: String,
		},
		top: {
			type: [Number, String],
			default: 0
		}

	})

	const { show, zIndex, duration, opacity, background, top } = toRefs(props)

	const maskStyle = computed(() => ({
		position: 'fixed',
		bottom: 0,
		top: top.value,
		left: 0,
		right: 0,
		backgroundColor: !background.value ? `rgba(0, 0, 0, ${opacity.value})` : background.value,
		zIndex: zIndex.value,
	}))

	const onClick = () => {
		emit('click')
	}
</script>

<style lang="scss">
</style>
