<template>
	<view class="home">
		<sakura-nav-bar height="50px"></sakura-nav-bar>
		<view class="home-row" v-for="(item,index) in listData" :key="index">
			<view class="home-row-title">{{item.title}}</view>
			<view class="home__list">
				<view class="home__list__item" @click="onPage(item.path)" v-for="(item,index) in item.child"
					:key="index">
					<view class="icon">
						<sakura-icon name="arrow-right" :size="16"></sakura-icon>
					</view>
					<view class="title">
						<sakura-text :size="32" fontWeight="bold" :line="1">{{item.title}}</sakura-text>
						<sakura-text class="desc" :size="28" color="rgba(0,0,0,.4)"
							:line="1">{{item.desc}}</sakura-text>
					</view>
					<sakura-icon name="arrow-right" :size="16"></sakura-icon>
				</view>
			</view>
		</view>
		<sakura-navigation></sakura-navigation>
	</view>
</template>
<script setup lang="ts">
	const basicsData = {
		title: '基础组件',
		child: [
			{
				title: '配色',
				desc: 'Color'
			},
			{
				title: '布局',
				desc: 'Flex'
			},
			{
				title: '布局',
				desc: 'Grid',
				path: '/grid/grid'
			},
			{
				title: '按钮',
				desc: 'Button',
				path: "/button/button"
			},
			{
				title: '图标',
				desc: 'Icon',
				path: "/icon/icon"
			},
			{
				title: '单元格',
				desc: 'Cell',
				path: "/cell/cell"
			},
			{
				title: '链接',
				desc: 'Link',
				path: "/link/link"
			},
			{
				title: '文本',
				desc: 'Text',
				path: "/text/text"
			},
			{
				title: '头像',
				desc: 'Avatar',
				path: "/avatar/avatar"
			},
			{
				title: '加载',
				desc: 'Loading',
				path: '/loading/loading'
			},
			{
				title: '微标',
				desc: 'Badge',
				path: "/badge/badge"
			},
		]
	}
	const navData = {
		title: '导航组件',
		child: [
			{
				title: '搜索',
				desc: 'Search',
				path: '/search/search'
			},
			{
				title: '导航',
				desc: 'NavBar',
				path: '/navbar/navbar'
			}
		]
	}

	const feedbackData = {
		title: '反馈组件',
		child: [
			{
				title: '通知栏',
				desc: 'NoticeBar',
				path: '/notice/notice'
			},
			{
				title: '弹出层',
				desc: 'Popup',
				path: '/popup/popup'
			},
			{
				title: '消息提示',
				desc: 'Message',
				path: '/message/message'
			},
			{
				title: '警告提示',
				desc: 'Alert',
				path: '/alert/alert'
			},
		]
	}

	const formData = {
		title: '表单组件',
		child: [
			{
				title: '多列选择器',
				desc: 'Picker',
				path: '/picker/picker'
			},
			{
				title: '选择器',
				desc: 'DatetimePicker',
				path: '/dateTime/dateTime'
			}
		]
	}

	const showData = {
		title: '展示组件',
		child: [
			{
				title: '轮播图',
				desc: 'Swiper',
				path: '/swiper/swiper'
			},

			{
				title: '分割线',
				desc: 'Divider',
				path: "/divider/divider"
			},
			{
				title: '标签',
				desc: 'Tag',
				path: "/tag/tag"
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
	const onPage = (url : string) => {
		uni.navigateTo({
			url: '/pages/components' + url,
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
				// border-radius: 6rpx;
				display: flex;
				align-items: center;
				// box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.1);
				justify-content: center;
				height: 120rpx;

				.icon {
					width: 120rpx;
					height: 100%;
					background-color: #f3f3f3;
					margin-right: 32rpx;
					border-radius: 6rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.title {
					flex: 1;
					height: 100%;
					display: flex;
					font-size: 32rpx;
					flex-direction: column;
					justify-content: space-between;
					border-bottom: 2rpx solid #f3f3f3;

					.desc {
						padding-bottom: 12rpx;
					}
				}
			}
		}
	}

</style>
