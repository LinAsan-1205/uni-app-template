<template>
	<view :class="classes(n(), n('--var'),[vertical, n('--column'), n('--row')])" :style="stylesName">

		<slot></slot>
	</view>
</template>
<!-- #ifdef MP-WEIXIN -->
<script lang="ts">
	export default {
		options: { virtualHost: true }
	}
</script>
<!-- #endif -->
<script lang="ts" setup>
	import { computed, toRefs } from 'vue'
	const props = defineProps({
		offset: {
			type: [Number, String],
		},
		vertical: {
			type: Boolean,
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
