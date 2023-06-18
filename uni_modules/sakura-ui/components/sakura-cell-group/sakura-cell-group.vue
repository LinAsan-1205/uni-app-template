<template>
	<view :class="classes(n(),n('--var'),[border,n('--border')])">
		<slot name="title">
			<view :class="classes(n('--title'))" v-if="title">
				{{title}}
			</view>
		</slot>
		<slot></slot>
	</view>
</template>

<script lang="ts" setup>
	import { toRefs } from "vue";
	const props = defineProps({
		//标题
		title: {
			type: String,
		},
		//边框
		border: {
			type: Boolean,
			default: false
		}
	})
	const { title, border } = toRefs(props)
	const { n, classes } = uni.$sakura.utils.createNamespace('cell-group')
</script>

<style lang="scss">
	@import './sakura-cell-group.scss';

</style>
