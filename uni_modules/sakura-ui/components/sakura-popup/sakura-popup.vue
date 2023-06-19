<template>
	<view :class="className">
		<sakura-overlay :show="show" :duration="duration" v-if="overlay"></sakura-overlay>
		<sakura-transition name="content" key="2" :show="show" :mode-class="modeClass" :styles="transClass"
			:duration="duration" :custom-class="customClass">
			<view :class="classes(n('--content'))">
				<slot></slot>
			</view>
		</sakura-transition>
	</view>
</template>

<script lang="ts" setup>
	import { ref, computed, toRefs, PropType, watch, onMounted, reactive } from "vue";

	const props = defineProps({
		show: {
			type: Boolean as PropType<boolean>,
			default: false
		},
		overlay: {
			type: Boolean as PropType<boolean>,
			default: true
		},
		mode: {
			type: String as PropType<string | any>,
			default: 'bottom'
		},
		duration: {
			type: Number as PropType<number>,
			default: 300
		},
		safeArea: {
			type: Boolean as PropType<boolean>,
			default: false
		}
	})

	const { show, overlay, mode, duration } = toRefs(props)

	const { n, classes } = uni.$sakura.utils.createNamespace('popup')

	const isDesktop = computed(() => popup.width >= 500 && popup.height >= 500)


	const className = computed(() => classes(n(), n('--var'), n(`--${mode.value}`),
		[isDesktop.value, n('--pc')]
	))

	const popup = reactive({
		width: 0,
		height: 0,
		safeAreaInsets: 0
	})


	const transClass = ref<Record<string, any>>({
		position: 'fixed',
		left: 0,
		right: 0
	})


	const modeClass = computed(() => {
		return {
			bottom: 'slide-bottom'
		}[mode.value]
	})

	const customClass = computed(() => {
		return {
			bottom: n('--bottom')
		}[mode.value]
	})


	watch(() => show.value, () => {
		if (mode.value === 'bottom') {
			transClass.value = {
				paddingBottom: popup.safeAreaInsets + 'px',
				backgroundColor: '#fff',
				zIndex: 99999,
			}
			popup.showPopup = true
		}
		console.log(1, mode.value, 'mode')
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
