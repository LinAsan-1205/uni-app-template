<template>
	<view :class="className" v-if="popup.showPopup">
		<sakura-overlay :background="maskBackground" @click="onOverlay" :show="popup.showTrans" :zIndex="zIndex"
			:duration="duration" v-if="overlay"></sakura-overlay>
		<sakura-transition @change="onChange" :show="popup.showTrans" :mode-class="modeClass" :styles="{
				...transClass,
				...customNavTop,
			}" :duration="duration" :custom-class="customClass">
			<view :class="classes(n('--content'))">
				<slot></slot>
			</view>
		</sakura-transition>
	</view>
</template>
<!-- #ifdef MP-WEIXIN -->
<script lang="ts">
	export default {
		options: { styleIsolation: 'shared' }
	}
</script>
<!-- #endif -->
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
		showPopup: true,
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
		const isbottom = position.value !== 'bottom'
		if (!isbottom || !customNavBar.value) return {}
		return {
			top: uni.$sakura.utils.getCustomNavTop(customNavBarHeight.value)
		}
	})


	watch(() => show.value, () => {
		if (!show.value) {
			return
		}
		transClass.value = {
			position: "fixed",
			paddingBottom: popup.safeAreaInsets + 'px',
			backgroundColor: background.value,
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
</script>

<style lang="scss">
	@import './sakura-popup.scss';

</style>
