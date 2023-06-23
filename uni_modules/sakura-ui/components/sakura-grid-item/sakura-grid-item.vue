<template>
	<view :class="className" :style="stylesName" v-if="grid.width" @click="onClick">
		<view :class="classes(n('--content'),[grid.border.value, n('--border')])">
			<slot></slot>
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
<script lang="ts" setup>
	import { computed, inject, Ref, toRefs } from 'vue'

	const grid = inject<{
		width : Ref<string>,
		change : (name : string) => void
		border : Ref<number>
		children : Ref<Array<any>>
	}>('sakuraGrid')


	const props = defineProps({
		name: {
			type: String
		}
	})

	const { name } = toRefs(props)

	const { n, classes } = uni.$sakura.utils.createNamespace('grid-item')


	const className = computed(() => classes(n()
	))

	const stylesName = computed(() => ({
		width: grid.width.value
	}))




	const onClick = () => {
		if (!name.value) return
		grid.change(name.value)
	}
</script>

<style lang="scss">
	@import './sakura-grid-item.scss';

</style>
