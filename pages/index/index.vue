<template>
	<view class="home">
		<view class="home__list">
			<view class="home__list__item" @click="onPage(item.path)" :style="{backgroundColor:item.bg}"
				v-for="(item,index) in listData" :key="index">
				<sakura-icon color="#fff" :size="item.iconSize" :name="item.icon"></sakura-icon>
				<text>{{item.title}}</text>
			</view>
		</view>
		<sakura-navigation></sakura-navigation>
	</view>
</template>
<script setup lang="ts">
	const listData = [
		{
			title: 'Flex布局',
			bg: '#1a5cff',
			icon: 'all',
			iconSize: 32
		},
		{
			title: 'Grid布局',
			bg: '#F24C3D',
			icon: 'grid',
			iconSize: 22
		},
		{
			title: '图标',
			bg: '#F2BE22',
			iconSize: 32
		},
		{
			title: '按钮',
			bg: '#E15FED',
			icon: 'anniu',
			iconSize: 24,
			path: "/pages/components/button/button"
		},
		{
			title: '标签',
			bg: '#22A699',
			icon: 'tag',
			iconSize: 24
		},
		{
			title: '微标',
			bg: '#50D890',
			icon: 'tag',
			iconSize: 24
		},
		{
			title: '头像',
			bg: '#8DCBE6',
			icon: 'people',
			iconSize: 24
		}
	]
	const onPage = (url : string) => {
		uni.navigateTo({
			url
		})
	}
</script>
<style lang="scss" scoped>
	@use 'sass:color';

	.home {
		&__list {
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 40rpx;
			padding: 24rpx 32rpx;

			&__item {
				text-align: center;
				font-size: 28rpx;
				padding: 40rpx 32rpx;
				border-radius: 8rpx;
				color: #000000;
				display: flex;
				align-items: center;
				background: #307DF1;
				box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.1);
				color: #fff;

				text {
					font-size: 32rpx;

					&:first-child {
						font-size: 48rpx;
						margin-right: 27rpx;
					}

					&:last-child {
						margin-bottom: 0;
					}
				}
			}
		}
	}

</style>
