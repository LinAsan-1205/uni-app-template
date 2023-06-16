<template>
	<view class="sakura-navbar sakura-navbar--var">
		<view
			:class="{ 'sakura-navbar--fixed': fixed, 'sakura-navbar--header': true, 'sakura-navbar--border': showBorder && border }"
			:style="{ background: bgColor, 'font-size': fontSize, height: navbarHeight, paddingTop: fixed && statusBarHeight + 'px' }">
			<view class="sakura-navbar--left" v-if="showLeftIcon" :style="leftStyle" @tap="handleLeft">
				<slot name="left">
					<view class="sakura-navbar--left--icon" v-if="leftIcon&&leftIcon.length > 0 && !firstPage">
						<sakura-icon :color="leftColor || color" :name="leftIcon" :size="leftIconSize"></sakura-icon>
					</view>
					<view class="sakura-navbar--left--icon" v-else><sakura-icon :color="leftColor || color"
							:name="homeIcon" :size="leftIconSize" v-if="showHomeIcon"></sakura-icon></view>
					<view class="sakura-navbar--left--text" v-if="leftText&&leftText.length > 0">
						<text :style="{ fontSize: '12px' }">{{ leftText }}</text>
					</view>
				</slot>
			</view>
			<view class="sakura-navbar--title" :class="{ 'sakura-navbar--title--center': titleCenter }" v-if="showTitle"
				@tap="handleTitle">
				<slot>
					<text :style="{ color }" class="sakura-navbar--title--text">{{ title }}</text>
				</slot>
			</view>
			<view class="sakura-navbar--right" v-if="showRightIcon" :style="rightStyle" @tap="handleRight">
				<slot name="right">
					<view class="sakura-navbar--right--text" v-if="rightText&&rightText.length > 0">
						<text :style="{ fontSize: '12px' }">{{ rightText }}</text>
					</view>
					<view class="sakura-navbar--right--icon" v-if="rightIcon&&rightIcon.length > 0"><sakura-icon
							:color="rightColor || color" :name="rightIcon" :size="rightIconSize"></sakura-icon></view>
				</slot>
			</view>
		</view>
		<view class="sakura-navbar--placeholder"
			:style="{ height: navbarHeight, paddingTop: fixed && statusBarHeight + 'px' }" v-if="fixed">
			<view class="sakura-navbar--placeholder--view" />
		</view>
	</view>
</template>

<script setup lang="ts">
	import { computed, toRefs, onMounted, type PropType } from "vue";

	const whiteList = ['#FFF', '#fff', '#FFFFFF', '#ffffff', 'white', 'rgb(255,255,255)', 'rgba(255,255,255,1)'];
	const props = defineProps({
		//标题
		title: {
			type: String as PropType<string>,
			default: null,
		},
		//标题剧中
		titleCenter: {
			type: Boolean as PropType<boolean>,
			default: true,
		},
		//文字大小
		fontSize: {
			type: [String, Number] as PropType<string | number>,
			default: '12px',
		},
		//文字颜色
		color: {
			type: String as PropType<string>,
			default: '#fff',
		},
		//高
		height: {
			type: [String, Number] as PropType<string | number>,
			default: null,
		},
		//背景颜色
		bgColor: {
			type: String as PropType<string>,
			default: 'var(--sakura-navbar-background-color)',
		},
		//固定
		fixed: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		//下边框
		border: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		//首页图标
		homeIcon: {
			type: String as PropType<string>,
			default: 'home',
		},
		isClickHome: {
			type: Boolean as PropType<boolean>,
			default: uni.$sakura.config.navbar.isClickHome
		},
		isBack: {
			type: Boolean as PropType<boolean>,
			default: true,
		},
		//左侧图标
		leftIcon: {
			type: String as PropType<string>,
			default: 'left',
		},
		//左侧文字
		leftText: {
			type: String as PropType<string>,
			default: '',
		},
		//是否显示 如果home图标
		showHomeIcon: {
			type: Boolean as PropType<boolean>,
			default: true,
		},
		//是否显示左侧图标
		showLeftIcon: {
			type: Boolean as PropType<boolean>,
			default: true,
		},
		//左侧宽度
		leftWidth: {
			type: [String, Number] as PropType<string | number>,
			default: '40px',
		},
		//左侧颜色
		leftColor: {
			type: String as PropType<string>,
			default: null,
		},
		//左侧图标大小
		leftIconSize: {
			type: [String, Number] as PropType<string | number>,
			default: '32rpx',
		},
		//是否显示右侧图标
		showRightIcon: {
			type: Boolean as PropType<boolean>,
			default: true,
		},
		//右侧图标
		rightIcon: {
			type: String as PropType<string>,
			default: '',
		},
		//右侧文字
		rightText: {
			type: String as PropType<string>,
			default: '',
		},
		//右侧宽度
		rightWidth: {
			type: [String, Number] as PropType<string | number>,
			default: '40px',
		},
		//右侧颜色
		rightColor: {
			type: String as PropType<string>,
			default: null,
		},
		//右侧图标大小
		rightIconSize: {
			type: [String, Number] as PropType<string | number>,
			default: '24px',
		}
	});
	const emit = defineEmits(['clickLeft', 'clickRight', 'clickTitle', 'clickHome'])
	const {
		title,
		color,
		fontSize: size,
		bgColor,
		fixed,
		height,
		titleCenter,
		border,
		showLeftIcon,
		leftWidth,
		leftColor,
		leftIconSize,
		leftText,
		showRightIcon,
		rightWidth,
		rightIcon,
		rightColor,
		rightText,
		rightIconSize,
		showHomeIcon,
		homeIcon,
		isBack,
		isClickHome
	} = toRefs(props);
	const leftStyle = computed(() => ({
		minWidth: uni.$sakura.utils.getVal(leftWidth.value),
		color: leftColor.value || color.value,
	}))
	const rightStyle = computed(() => ({
		minWidth: uni.$sakura.utils.getVal(rightWidth.value),
		color: rightColor.value || color.value,
	}))
	const showTitle = computed(() => title.value && title.value.length > 0)
	const showBorder = computed(() => whiteList.includes(bgColor.value))
	const fontSize = computed(() => uni.$sakura.utils.getVal(size.value))
	const navbarHeight = computed(() => uni.$sakura.utils.getVal(height.value))
	const statusBarHeight = computed(() => uni.getSystemInfoSync()['statusBarHeight'])
	const firstPage = computed(() => getCurrentPages().length === 1)
	const handleLeft = () => {
		if (firstPage.value && showHomeIcon.value) {
			const { isClickHome: navbarClick, defaultNavBarPath } = uni.$sakura.config.navbar
			if ((isClickHome.value && navbarClick) && defaultNavBarPath) {
				uni.switchTab({
					url: defaultNavBarPath
				})
				return
			}
			emit('clickHome')
			return
		}
		if (!firstPage.value && isBack.value) {
			uni.navigateBack()
			return
		}
		emit('clickLeft')
	}
	const handleTitle = () => {
		emit('clickTitle')
	}
	const handleRight = () => {
		emit('clickRight')
	}
	onMounted(() => {
		if (uni.report && title.value !== '') {
			uni.report('title', title.value)
		}
	})
</script>

<style scoped lang="scss">
	@use "./sakura-nav-bar.scss";

</style>
