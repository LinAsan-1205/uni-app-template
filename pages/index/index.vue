<template>
	<view class="home">
		<sakura-nav-bar height="50px" :showHomeIcon="false">
			<template #left>
				<sakura-icon name="github-circle-fill" color="#fff" :size="26" @click="onGithub"></sakura-icon>
			</template>
		</sakura-nav-bar>
		<sakura-space :margin="[32,48,0]" vertical>
			<view class="home__title">🌸 SAKURA</view>
			<view class="home__desc">sakura-ui，全面兼容uni-app生态框架，拥有丰富的组件和便捷的工具模版</view>
		</sakura-space>
		<view class="home-row" v-for="(item,index) in listData" :key="index">
			<view class="l-title">{{item.title}}</view>
			<view class="home__list">
				<view class="home__list__item" @click="onPage(item.path)" v-for="(item,index) in item.child"
					:key="index">
					<view class="title">
						<sakura-text size="md" :line="1" color="#fff">{{item.title}}</sakura-text>
					</view>
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
				title: 'Flex 布局',
			},
			{
				title: 'Grid 布局',
				path: '/grid/grid'
			},
			{
				title: 'Button 按钮',
				path: "/button/button"
			},
			{
				title: 'Icon 图标',
				path: "/icon/icon"
			},
			{
				title: 'Cell 单元格',
				path: "/cell/cell"
			},
			{
				title: 'Link 链接',
				path: "/link/link"
			},
			{
				title: 'Text 文本',
				path: "/text/text"
			},
			{
				title: 'Avatar 头像',
				path: "/avatar/avatar"
			},
			{
				title: 'Loading 加载',
				path: '/loading/loading'
			},
			{
				title: 'Badge 微标',
				path: "/badge/badge"
			},
		]
	}
	const navData = {
		title: '导航组件',
		child: [
			{
				title: 'Search 搜索',
				path: '/search/search'
			},
			{
				title: 'NavBar 导航',
				path: '/navbar/navbar'
			}
		]
	}

	const feedbackData = {
		title: '反馈组件',
		child: [
			{
				title: 'NoticeBar 通知栏',
				path: '/notice/notice'
			},
			{
				title: 'Popup 弹出层',
				path: '/popup/popup'
			},
			{
				title: 'Message 消息提示',
				path: '/message/message'
			},
		]
	}

	const formData = {
		title: '表单组件',
		child: [
			{
				title: 'Picker 多列选择器',
				path: '/picker/picker'
			},
			{
				title: 'DatetimePicker 选择器',
				path: '/dateTime/dateTime'
			}
		]
	}

	const showData = {
		title: '展示组件',
		child: [
			{
				title: 'Swiper 轮播图',
				path: '/swiper/swiper'
			},

			{
				title: 'Divider 分割线',
				path: "/divider/divider"
			},
			{
				title: 'Tag 标签',
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
	@use 'sass:color';

	.home {
		padding-bottom: 40rpx;

		&-row {
			padding: 0 20rpx;

			.l-title {
				font-size: 28rpx;
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
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 40rpx;
			margin-top: 10rpx;

			&__item {
				padding: 40rpx 32rpx;
				border-radius: 8rpx;
				display: flex;
				align-items: center;
				background: rgb(26, 92, 255);
				box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.1);
				justify-content: center;

				.title {
					font-size: 28rpx;
				}
			}
		}
	}

</style>
