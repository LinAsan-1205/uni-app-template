<template>
	<view :class="className">
		<view :class="classes(n('--left'))">
			<slot name="left">
				<sakura-icon v-if="leftIcon&&showIcon" :name="leftIcon" :color="leftIconColor||getVar('-bar-color')"
					size="38rpx"></sakura-icon>
			</slot>
		</view>
		<view :class="classes(n('--content'))">{{text}}</view>
		<view :class="classes(n('--right'))">
			<slot name="right">
				<sakura-icon v-if="rightIcon&&showClose" :name="rightIcon" :color="rightIconColor||getVar('-bar-color')"
					size="38rpx"></sakura-icon>
			</slot>
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
	import { computed, toRefs } from "vue";

	const props = defineProps({
		//内容
		text: {
			type: String
		},
		//显示左侧图标
		showIcon: {
			type: Boolean,
			default: false
		},
		//左侧图标
		leftIcon: {
			type: String,
			default: 'notification'
		},
		//左侧图标颜色
		leftIconColor: {
			type: String
		},
		//显示关闭图标
		showClose: {
			type: Boolean,
			default: false
		},
		//右侧图标
		rightIcon: {
			type: String,
			default: 'close'
		},
		//右侧图标颜色
		rightIconColor: {
			type: String
		}
	})

	const { text, showIcon, leftIcon, leftIconColor, rightIcon, rightIconColor, showClose } = toRefs(props)

	const { n, classes, getVar } = uni.$sakura.utils.createNamespace('notice')

	const className = computed(() => classes(n(), n('--var')))
</script>

<style lang="scss">
	@import './sakura-notice-bar.scss';

</style>
