<template>
	<view :class="className" :style="stylesName">
		<view :class="classes(n('--wrap'),[border,n('--border')])" :id="elId" ref="grid">
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
	import { ref, computed, PropType, toRefs, getCurrentInstance, onMounted, provide, Ref, watch } from "vue";

	const emit = defineEmits(['change'])

	const props = defineProps({
		//列
		col: {
			type: Number as PropType<number>,
			default: 3
		},
		//是否显示border
		border: {
			type: Boolean as PropType<boolean>,
			default: true
		},
		//边框颜色
		borderColor: {
			type: String as PropType<string>
		}
	})

	const { col, border, borderColor } = toRefs(props)

	const { n, classes, getVar } = uni.$sakura.utils.createNamespace('grid')

	const elId = `Sakura_${Math.ceil(Math.random() * 10e5).toString(36)}`


	const grid = ref()


	const className = computed(() => classes(n(), n('--var')))

	const stylesName = computed(() => {
		let styles = {}
		if (border.value && borderColor.value) {
			styles[getVar('-border')] = borderColor.value
		}
		return styles
	})

	const width = computed(() => {
		return 100 / col.value + '%'
	})

	provide<{
		width : Ref<string>,
		change : (name : any) => void
		border : Ref<boolean>,
		children : Ref<Array<any>>
	}>('sakuraGrid', {
		width,
		change: (name) => {
			emit('change', name)
		},
		border,
	})
</script>

<style lang="scss">
	@import './sakura-grid.scss';

</style>
