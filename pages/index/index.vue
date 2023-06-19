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
		<view class="home__list">
			<view class="home__list__item" @click="onPage(item.path)" v-for="(item,index) in listData" :key="index">
				<view class="title">
					<sakura-text size="md">{{item.title}}</sakura-text>
				</view>
			</view>
		</view>
		<sakura-navigation></sakura-navigation>
	</view>
</template>
<script setup lang="ts">
	const navData = [
		{
			title: 'Search 搜索',
			path: '/search/search'
		},
		{
			title: 'NavBar 导航',
			path: '/navbar/navbar'
		}
	]
	const listData = [
		{
			title: 'Flex 布局',
		},
		{
			title: 'Grid 布局',
		},
		{
			title: 'Swiper 轮播图',
			path: '/swiper/swiper'
		},
		{
			title: 'Icon 图标',
			path: "/icon/icon"
		},
		{
			title: 'Button 按钮',
			path: "/button/button"
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
			title: 'Cell 单元格',
			path: "/cell/cell"
		},
		{
			title: 'Tag 标签',
			path: "/tag/tag"
		},
		{
			title: 'Badge 微标',
			path: "/badge/badge"
		},
		{
			title: 'Avatar 头像',
			path: "/avatar/avatar"
		},
		{
			title: 'Loading 加载',
			path: '/loading/loading'
		},

		...navData
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
		&__title {
			font-size: var(--sakura-font-size-lg);
		}

		&__desc {
			color: var(--sakura-color-text-sub-text);
			font-size: var(--sakura-font-size-sm);
		}

		&__list {
			display: flex;
			padding: 0 24rpx;
			flex-direction: column;

			&__item {
				padding: 24rpx;
				display: flex;
				align-items: center;
				background: #fff;

				.title {
					font-size: 32rpx;
				}
			}
		}
	}

</style>
