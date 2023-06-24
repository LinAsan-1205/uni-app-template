<template>
	<view :class="className">
		<view :class="classes(n('--left'))">
			<slot name="left">
				<sakura-icon v-if="leftIcon&&showIcon" :name="leftIcon" :color="leftIconColor||getVar('-bar-color')"
					size="38rpx"></sakura-icon>
			</slot>
		</view>
		<view :class="classes(n('--content'))" v-if="direction==='row'">
			<view ref="animationEl" :class="classes(n('--text'),[
				scrollable,
				n('--scrollable')
			],
			 [!scrollable,n('--single')]
			)" :style="{
						'animationDuration': animation.duration,
						'-webkit-animationDuration': animation.duration,
						animationPlayState: webviewHide ? 'paused' : animation.playState,
						'-webkit-animationPlayState': webviewHide ? 'paused' : animation.playState,
						animationDelay: animation.delay,
						'-webkit-animationDelay': animation.delay
					}">
				{{text}}
			</view>
		</view>
		<view :class="classes(n('--right'))" v-if="showClose">
			<slot name="right">
				<sakura-icon v-if="rightIcon" :name="rightIcon" :color="rightIconColor||getVar('-bar-color')"
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
	import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, toRefs, getCurrentInstance } from "vue";

	// #ifdef APP-NVUE
	const dom = weex.requireModule('dom');
	const ani = weex.requireModule('animation');
	// #endif

	const instance = getCurrentInstance()

	const props = defineProps({
		//内容
		text: {
			type: String
		},
		//显示左侧图标
		showIcon: {
			type: Boolean,
			default: true
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
		},
		//滚动模式 通告滚动模式，row-横向滚动，column-竖向滚动	
		direction: {
			type: String,
			default: 'row'
		},
		//动画时间
		startTime: {
			type: Number,
			default: 1000
		},
		speed: {
			type: Number,
			default: 100
		},
		//是否滚动
		scrollable: {
			type: Boolean,
			default: false
		}
	})

	const { text, showIcon, leftIcon, leftIconColor, rightIcon, rightIconColor, showClose, direction, startTime, speed, scrollable } = toRefs(props)

	const { n, classes, getVar } = uni.$sakura.utils.createNamespace('notice')

	const className = computed(() => classes(n(), n('--var')))

	const webviewHide = ref(false)

	const animation = reactive({
		duration: '0',
		playState: 'paused',
		delay: '0s'
	})

	const animationEl = ref()


	// #ifdef APP-NVUE
	const stopAnimation = ref(false)
	// #endif

	const getWidth = (val : string) => {
		return new Promise((resolve) => {
			uni.createSelectorQuery()
				// #ifndef MP-ALIPAY
				.in(instance)
				// #endif
				.select(`.${val}`)
				.boundingClientRect()
				.exec(ret => {
					resolve(ret[0].width)
				})
		})
	}

	const initSize = () => {
		if (scrollable.value) {
			// #ifndef APP-NVUE

			Promise.all([getWidth(n('--content')), getWidth(n('--text'))]).then((res : any) => {
				console.log(res[1], '1')
				animation.duration = `${res[1] / speed.value}s`
				animation.delay = `-${res[0] / speed.value}s`

				setTimeout(() => {
					animation.playState = 'running'
				}, startTime.value)
			})
			// #endif


		}
	}

	onMounted(() => {
		// #ifdef APP-PLUS
		var pages = getCurrentPages();
		var page = pages[pages.length - 1];
		var currentWebview = page.$getAppWebview();
		currentWebview.addEventListener('hide', () => {
			webviewHide.value = true
		})
		currentWebview.addEventListener('show', () => {
			webviewHide.value = false
		})
		// #endif
		nextTick(() => {
			initSize()
		})
	})
	// #ifdef APP-NVUE
	onBeforeUnmount(() => {
		stopAnimation.value = true
	})
	// #endif
</script>

<style lang="scss">
	@import './sakura-notice-bar.scss';

</style>
