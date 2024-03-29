<template>
	<view :class="className" v-if="popup.showPopup">
		<sakura-overlay :background="maskBackground" @click="onOverlay" :show="popup.showTrans" :zIndex="zIndex"
			:duration="duration" v-if="overlay" :top="customNavTop"></sakura-overlay>
		<sakura-transition @change="onChange" :show="popup.showTrans" :mode-class="modeClass" :styles="{
				...transClass,
				...customTransitionNavTop

			}" :duration="duration" :custom-class="customClass">
			<view :class="classes(n('--content'),[round, n(`--${position}--round`)])" :style="{background: background}"
				@click="onOverlay">
				<slot></slot>
			</view>
		</sakura-transition>
	</view>
</template>
<!-- #ifdef MP-WEIXIN -->
<script lang="ts">
	export default {
		options: { styleIsolation: 'shared', virtualHost: true }
	}
</script>
<!-- #endif -->
<script lang="ts" setup>
	import { ref, computed, toRefs, watch, onMounted, reactive } from "vue";

	const emit = defineEmits(['close', 'open'])

	const props = defineProps({
		show: {
			type: Boolean,
			default: false
		},
		overlay: {
			type: Boolean,
			default: true
		},
		position: {
			type: String,
			default: 'bottom'
		},
		width: {
			type: String,
			default: '400rpx'
		},
		duration: {
			type: Number,
			default: 300
		},
		zIndex: {
			type: Number,
			default: 1000
		},
		background: {
			type: String,
			default: '#fff'
		},
		closeOnClickOverlay: {
			type: Boolean,
			default: true
		},
		round: {
			type: Boolean,
			default: false
		},
		safeArea: {
			type: Boolean,
			default: false
		},
		maskBackground: {
			type: String,
			default: 'rgba(0,0,0,.6)'
		},
		//适配自定义导航
		customNavBar: {
			type: Boolean,
			default: true
		},
		//自定义导航高度
		customNavBarHeight: {
			type: Number,
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
		showPopup: false,
		showTrans: false
	})


	const transClass = ref<Record<string, any>>({
		position: 'fixed',
		left: 0,
		right: 0
	})


	const modeClass = computed(() => {
		return {
			bottom: ['slide-bottom'],
			top: ['slide-top'],
			center: ['zoom-out', 'fade'],
			left: ['slide-left'],
			right: ['slide-right']
		}[position.value]
	})

	const customClass = computed(() => {
		const border = position.value !== 'left' && position.value !== 'right'
		return `${n(`--${position.value}`)} ${border && round.value ? n(`--${position.value}--round`) : ''}`
	})



	const onClose = () => {
		popup.showTrans = false
		//根据动画时间延迟隐藏popup
		setTimeout(() => {
			popup.showPopup = false
			emit('close')
		}, duration.value)
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
		if (!customNavBar.value) return 0
		return uni.$sakura.utils.getCustomNavTop(customNavBarHeight.value)
	})

	const customTransitionNavTop = computed(() => {
		if (!customNavBar.value || position.value === 'bottom') return {}
		return {
			top: customNavTop.value
		}
	})


	watch(() => show.value, () => {
		if (!show.value) {
			onClose()
			return
		}
		transClass.value = {
			position: "fixed",
			paddingBottom: popup.safeAreaInsets + 'px',
			zIndex: zIndex.value,
			width: (position.value === 'left' || position.value === 'right') && width.value
		}
		popup.showPopup = true
		popup.showTrans = true
	}, {
		deep: true
	})

	onMounted(() => {
		const {
			safeArea,
			screenHeight,
			safeAreaInsets
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
	defineExpose({
		close: onClose
	})
</script>

<style lang="scss">
	@import './sakura-popup.scss';

</style>
