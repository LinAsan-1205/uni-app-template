<template>
	<view :class="className" :style="stylesName" v-if="show">
		<view :class="classes(n('--left'))" v-if="showIcon">
			<sakura-icon :name="leftIcon" size="38rpx"></sakura-icon>
		</view>
		<view :class="classes(n('--content'))">
			<view :class="classes(n('--title'))" v-if="title">
				{{title}}
			</view>
			<view :class="classes(n('--description'))" v-if="description">
				{{description}}
			</view>
		</view>
		<view :class="classes(n('--right'))" @click.stop="onClose" v-if="showClose">
			<sakura-icon name="close" size="38rpx"></sakura-icon>
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
	import { ref, computed, toRefs } from "vue";

	const emit = defineEmits(['close'])

	const props = defineProps({
		//标题
		title: {
			type: String,
		},
		//描述
		description: {
			type: String,
		},
		//文字大小
		fontSize: {
			type: String,
		},
		//类型 'primary' | 'info' | 'success' | 'warning' | 'error'
		type: {
			type: String,
			default: 'primary'
		},
		//显示左侧图标
		showIcon: {
			type: Boolean,
			default: false
		},
		//左侧图标
		icon: {
			type: String
		},
		//显示关闭
		showClose: {
			type: Boolean,
			default: false
		}
	})

	const { title, description, type, icon, fontSize, showIcon, showClose } = toRefs(props)

	const { n, classes } = uni.$sakura.utils.createNamespace('alert')

	const show = ref(true)

	const className = computed(() => classes(n(), n('--var'),
		[type.value, n(`--${type.value}`)],
		[title.value, n('--start')]
	))

	const stylesName = computed(() => ({
		fontSize: uni.$sakura.utils.getVal(fontSize.value)
	}))

	const leftIcon = computed(() => {
		if (icon.value) return icon.value
		return {
			primary: 'info-fill',
			success: 'round-check-fill',
			error: 'round-close-fill',
			warning: 'warning-fill',
			info: 'info-fill'
		}[type.value]
	})

	const onClose = () => {
		show.value = false
		emit('close')
	}
</script>

<style lang="scss">
	@import './sakura-alert.scss';

</style>
