<template>
	<sakura-transition @click="onClick" name="mask" mode-class="fade" :show="show" :styles="maskStyle"
		:duration="duration">
		<slot></slot>
	</sakura-transition>
</template>

<script lang="ts" setup>
	import { computed, PropType, toRefs } from "vue";

	const emit = defineEmits(['click'])

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
		},
		background: {
			type: String as PropType<string>,
		}

	})

	const { show, zIndex, duration, opacity, background } = toRefs(props)

	const maskStyle = computed(() => ({
		position: 'fixed',
		bottom: 0,
		top: 0,
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
