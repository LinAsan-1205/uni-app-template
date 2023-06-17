<template>
	<view :class="classes(n(), n('--var'),[vertical, n('--column'), n('--row')])" :style="stylesName">

		<slot></slot>
	</view>
</template>

<script lang="ts" setup>
	import { computed, toRefs, type PropType } from 'vue'
	const props = defineProps({
		offset: {
			type: [Number, String] as PropType<number | string>,
		},
		vertical: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
	})
	const { offset, vertical } = toRefs(props)

	const { n, classes, getVar } = uni.$sakura.utils.createNamespace('avatar-group')

	const stylesName = computed(() => {
		if (offset.value == null) {
			return {}
		}

		return {
			[getVar('offset')]: uni.$sakura.utils.getVal(offset.value),
		}
	})
</script>

<style lang="scss">
	@import './sakura-avatar-group.scss';

</style>
