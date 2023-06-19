<template>
	<view :class="className">
		<sakura-overlay @click="onOverlay" :show="popup.showPopup" :zIndex="zIndex" :duration="duration"
			v-if="overlay"></sakura-overlay>
		<sakura-transition name="content" key="2" @change="onChange" :show="popup.showPopup" :mode-class="modeClass"
			:styles="transClass" :duration="duration" :custom-class="customClass">
			<view :class="classes(n('--content'))">
				<slot></slot>
			</view>
		</sakura-transition>
	</view>
</template>

<script lang="ts" setup>
	import { ref, computed, toRefs, PropType, watch, onMounted, reactive } from "vue";

	const emit = defineEmits(['close', 'open'])

	const props = defineProps({
		show: {
			type: Boolean as PropType<boolean>,
			default: false
		},
		overlay: {
			type: Boolean as PropType<boolean>,
			default: true
		},
		position: {
			type: String as PropType<string | any>,
			default: 'bottom'
		},
		width: {
			type: String as PropType<string>,
			default: '400rpx'
		},
		duration: {
			type: Number as PropType<number>,
			default: 300
		},
		zIndex: {
			type: Number as PropType<number>,
			default: 10000
		},
		background: {
			type: String as PropType<string>,
			default: '#fff'
		},
		closeOnClickOverlay: {
			type: Boolean as PropType<boolean>,
			default: true
		},
		round: {
			type: Boolean as PropType<boolean>,
			default: false
		},
		safeArea: {
			type: Boolean as PropType<boolean>,
			default: false
		}
	})

	const { show, overlay, position, duration, zIndex, background, closeOnClickOverlay, round, width } = toRefs(props)

	const { n, classes } = uni.$sakura.utils.createNamespace('popup')

	const isDesktop = computed(() => popup.width >= 500 && popup.height >= 500)


	const className = computed(() => classes(
		n(),
		n('--var'),
		[isDesktop.value, n('--pc')]
	))

	const popup = reactive({
		width: 0,
		height: 0,
		safeAreaInsets: 0,
		showPopup: false
	})


	const transClass = ref<Record<string, any>>({
		position: 'fixed',
		left: 0,
		right: 0
	})


	const modeClass = computed(() => {
		return {
			bottom: 'slide-bottom',
			top: 'slide-top',
			center: ['zoom-out', 'fade'],
			left: 'slide-left',
			right: 'slide-right'
		}[position.value]
	})

	const customClass = computed(() => {
		const border = position.value !== 'left' && position.value !== 'right'
		return `${n(`--${position.value}`)} ${border && round.value ? n(`--${position.value}--round`) : ''}`
	})



	const onClose = () => {
		popup.showPopup = false
		emit('close')
	}

	const onChange = () => {
		emit('open')
	}

	const onOverlay = () => {
		if (closeOnClickOverlay.value) {
			onClose()
		}
	}


	watch(() => show.value, () => {
		if (!show.value) {
			popup.showPopup = false
			return
		}
		transClass.value = {
			paddingBottom: popup.safeAreaInsets + 'px',
			backgroundColor: background.value,
			zIndex: zIndex.value,
			width: position.value === 'left' || position.value === 'right' && width.value
		}
		popup.showPopup = true
	})

	onMounted(() => {
		const {
			windowWidth,
			windowHeight,
			windowTop,
			safeArea,
			screenHeight,
			safeAreaInsets
		} = uni.getSystemInfoSync()
		popup.width = windowWidth
		popup.height = windowHeight + (windowTop || 0)
		// TODO fix by mehaotian 是否适配底部安全区 ,目前微信ios 、和 app ios 计算有差异，需要框架修复
		if (safeArea && props.safeArea) {
			// #ifdef MP-WEIXIN
			popup.safeAreaInsets = screenHeight - safeArea.bottom
			// #endif
			// #ifndef MP-WEIXIN
			popup.safeAreaInsets = safeAreaInsets.bottom
			// #endif
		} else {
			popup.safeAreaInsets = 0
		}
	})
</script>

<style lang="scss">
	@import './sakura-popup.scss';

</style>
