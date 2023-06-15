<template>
	<view class="home">
		<sakura-nav-bar fixed :showLeftIcon="false" :showHomeIcon="false" title="sakura-ui"></sakura-nav-bar>
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
			title: 'Icon 图标',
			path: "/icon/icon"
		},
		{
			title: 'Button 按钮',
			path: "/button/button"
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
	console.log(uni.$sakura.utils.dayjs(new Date()), 'uni.sakura')
</script>
<style lang="scss" scoped>
	@use 'sass:color';

	.home {
		&__list {
			display: flex;
			padding: 24rpx;
			flex-direction: column;

			&__item {
				padding: 24rpx 32rpx;
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
