<template>
	<view :class="className" :style="stylesName">

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
	const className = computed(() => {
		let name = ['sakura-avatar-group', 'sakura-avatar-group--var']
		if (vertical.value) {
			name.push('sakura-avatar-group--column')
		} else {
			name.push('sakura-avatar-group--row')
		}
		return name
	})
	const stylesName = computed(() => {
		if (offset.value == null) {
			return {}
		}

		return {
			'--sakura-avatar-group-offset': uni.$sakura.utils.getVal(offset.value),
		}
	})
</script>

<style lang="scss">
	@import './sakura-avatar-group.scss';

</style>
