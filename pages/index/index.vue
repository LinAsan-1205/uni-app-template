<template>
	<view class="home">
		<sakura-nav-bar height="50px">
			<template #left>
				<sakura-avatar size="small" src="/static/image/avatar.jpg"></sakura-avatar>
			</template>
		</sakura-nav-bar>
		<view class="home-row" v-for="(item,index) in pageData" :key="index">
			<view class="home-row-title">
				<zui-svg-icon v-if="item.icon" :icon="item.icon" :color="item.color" width="66rpx"></zui-svg-icon>
				<text class="title">{{item.title}}</text>
			</view>
			<view class="home__list">
				<view class="home__list__item" @click="onPage(child.path)" v-for="(child,index) in item.child"
					:key="index">
					<view class="icon">
						<zui-svg-icon v-if="child.icon" :icon="child.icon" :color="child.color" width="66rpx"
							:spin="child.spin||false"></zui-svg-icon>
					</view>
					<view class="right">
						<view class="title">
							<sakura-text :size="32" fontWeight="bold" :line="1">{{child.title}}</sakura-text>
							<sakura-text customClass="desc" :size="28" color="rgba(0,0,0,.4)"
								:line="1">{{child.desc}}</sakura-text>
						</view>
						<sakura-icon name="arrow-right" :size="12"></sakura-icon>
					</view>
				</view>
			</view>
		</view>
		<sakura-navigation v-model="active"></sakura-navigation>

		<sakura-fullscreen-loading :loading="loading" background="rgba(255,255,255)"></sakura-fullscreen-loading>
	</view>
</template>
<script setup lang="ts">
	import { computed, ref, watch } from 'vue'
	const active = ref(0)
	const loading = ref(false)
	const basicsData = {
		title: '基础组件',
		child: [
			{
				title: '配色',
				desc: 'Color',
				path: '/color/color',
				icon: 'color',
				color: []
			},
			{
				title: '布局',
				desc: 'Flex',
				icon: 'flex',
				color: []
			},
			{
				title: '布局',
				desc: 'Grid',
				path: '/grid/grid',
				icon: 'grid',
				color: []
			},
			{
				title: '按钮',
				desc: 'Button',
				path: "/button/button",
				icon: 'button',
				color: []
			},
			{
				title: '图标',
				desc: 'Icon',
				path: "/icon/icon",
				icon: 'icon',
				color: []
			},
			{
				title: '单元格',
				desc: 'Cell',
				path: "/cell/cell",
				icon: 'cell',
				color: []
			},
			{
				title: '链接',
				desc: 'Link',
				path: "/link/link",
				icon: 'links',
				color: []
			},
			{
				title: '文本',
				desc: 'Text',
				path: "/text/text",
				icon: 'text',
				color: []
			},
			{
				title: '头像',
				desc: 'Avatar',
				path: "/avatar/avatar",
				icon: 'avatar',
				color: []
			},
			{
				title: '加载中',
				desc: 'Loading',
				path: '/loading/loading',
				icon: 'loading',
				color: [],
				spin: true
			},
			{
				title: '全屏加载',
				desc: 'FullscreenLoading',
				path: '/fullscreenLoading/fullscreenLoading',
				icon: 'loading',
				color: [],
				spin: true
			},
			{
				title: '微标',
				desc: 'Badge',
				path: "/badge/badge",
				icon: 'badge',
				color: [],
			},
		]
	}
	const navData = {
		title: '导航组件',
		child: [
			{
				title: '搜索',
				desc: 'Search',
				path: '/search/search',
				icon: 'search',
				color: [],
			},
			{
				title: '导航',
				desc: 'NavBar',
				path: '/navbar/navbar',
				icon: 'navbar',
				color: [],
			},
			{
				title: '选项卡',
				desc: 'Tabs',
				path: '/tabs/tabs',
				icon: 'tabs',
				color: [],
			}
		]
	}

	const feedbackData = {
		title: '反馈组件',
		child: [
			{
				title: '通知栏',
				desc: 'NoticeBar',
				path: '/notice/notice',
				icon: 'noticeBar',
				color: [],
			},
			{
				title: '弹出层',
				desc: 'Popup',
				path: '/popup/popup',
				icon: 'pop',
				color: [],
			},
			{
				title: '消息提示',
				desc: 'Message',
				path: '/message/message',
				icon: 'message',
				color: [],
			},
			{
				title: '警告提示',
				desc: 'Alert',
				path: '/alert/alert',
				icon: 'alert',
				color: [],
			},
		]
	}

	const formData = {
		title: '表单组件',
		child: [
			{
				title: '多列选择器',
				desc: 'Picker',
				path: '/picker/picker',
				icon: 'picker',
				color: [],
			},
			{
				title: '时间选择器',
				desc: 'DatetimePicker',
				path: '/dateTime/dateTime',
				icon: 'datetimePicker',
				color: [],
			}
		]
	}

	const showData = {
		title: '展示组件',
		child: [
			{
				title: '轮播图',
				desc: 'Swiper',
				path: '/swiper/swiper',
				icon: 'image',
				color: [],
			},

			{
				title: '分割线',
				desc: 'Divider',
				path: "/divider/divider",
				icon: 'divider',
				color: [],
			},
			{
				title: '标签',
				desc: 'Tag',
				path: "/tag/tag",
				icon: 'tag',
				color: [],
			},
		]
	}
	const listData = [
		basicsData,
		showData,
		navData,
		feedbackData,
		formData
	]

	const templateData = [
		{
			title: '地图',
			child: [
				{
					title: '定位',
					path: '/getLocation/getLocation',
					desc: 'getLocation',
					icon: 'gps'
				}
			]
		},
		{
			title: '微信小程序',
			child: [
				{
					title: '小程序隐私协议弹窗',
					path: '/requirePrivacyAuthorize/requirePrivacyAuthorize',
					desc: 'requirePrivacyAuthorize',
					icon: 'spy'
				}
			]
		}
	]

	const pageData = computed(() => {
		return {
			0: listData,
			1: templateData
		}[active.value]
	})

	watch(() => active.value, () => {
		loading.value = true
		setTimeout(() => {
			loading.value = false
		}, 800)
	})

	const onPage = (url : string) => {
		const urlCom = {
			0: '/pages/components',
			1: '/pages/other'
		}[active.value]
		uni.navigateTo({
			url: urlCom + url,
			fail() {
				uni.showToast({
					icon: 'none',
					title: '该组件未完成'
				})
			}
		})
	}
	const onGithub = () => {
		// #ifdef H5
		window.open('https://github.com/LinAsan-1205')
		// #endif
	}
</script>
<style lang="scss" scoped>
	.home {
		padding-bottom: 40rpx;

		&-row {
			padding: 0 20rpx;

			&-title {
				font-size: 42rpx;
				padding: 32rpx 16rpx 16rpx;
				font-weight: bold;
				color: #000;
				margin-bottom: 24rpx;
				display: flex;
				align-items: center;

				.title {
					margin-left: 8rpx;
				}
			}
		}

		&__title {
			font-size: var(--sakura-font-size-lg);
		}

		&__desc {
			color: var(--sakura-color-text-sub-text);
			font-size: var(--sakura-font-size-sm);
		}

		&__list {
			padding: 0 24rpx;
			display: grid;
			grid-template-columns: repeat(1, minmax(0, 1fr));
			gap: 40rpx;

			&__item {
				display: flex;
				align-items: center;
				// box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.1);
				justify-content: center;
				height: 110rpx;

				.icon {
					width: 110rpx;
					height: 100%;
					background-color: #f3f3f3;
					margin-right: 32rpx;
					border-radius: 6rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.right {
					display: flex;
					border-bottom: 2rpx solid #f3f3f3;
					align-items: center;
					flex: 1;
					height: 100%;
				}

				.title {
					flex: 1;
					height: 100%;
					display: flex;
					font-size: 32rpx;
					flex-direction: column;

					:deep(.desc) {
						padding-top: 4rpx;
					}
				}
			}
		}
	}

</style>
