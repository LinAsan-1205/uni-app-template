<template>
	<view :class="className">
		<sakura-overlay :background="maskBackground" @click="onOverlay" :show="popup.showPopup" :zIndex="zIndex"
			:duration="duration" v-if="overlay"></sakura-overlay>
		<sakura-transition name="content" @change="onChange" :show="popup.showPopup" :mode-class="modeClass" :styles="{
				...transClass,
				...customNavTop,
			}" :duration="duration" :custom-class="customClass">
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
		},
		maskBackground: {
			type: String as PropType<string>,
			default: 'rgba(0,0,0,.6)'
		},
		//适配自定义导航
		customNavBar: {
			type: Boolean as PropType<boolean>,
			default: true
		},
		//自定义导航高度
		customNavBarHeight: {
			type: Number as PropType<number>,
			default: () => {
				return uni.$sakura.config.navbar.height
			}
		}
	})

	const { show, overlay, position, duration, zIndex, background, closeOnClickOverlay, round, width, maskBackground, customNavBar, customNavBarHeight } = toRefs(props)

	const { n, classes } = uni.$sakura.utils.createNamespace('popup')

	const className = computed(() => classes(
		n(),
		n('--var'),
		n(`--wrapper-${position.value}`)
	))

	const popup = reactive({
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

	const customNavTop = computed(() => {
		const isbottom = position.value !== 'bottom'
		if (!isbottom || !customNavBar.value) return {}
		return {
			top: uni.$sakura.utils.getCustomNavTop(customNavBarHeight.value)
		}
	})


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
			safeArea,
			screenHeight,
			safeAreaInsets,
			statusBarHeight
		} = uni.getSystemInfoSync()
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
