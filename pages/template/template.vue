<template>
	<view class="home">
		<sakura-nav-bar height="50px" title="定位" :showHomeIcon="false"></sakura-nav-bar>
		<sakura-space :margin="[32,48,0]" vertical>
			<view class="home__title">🌸 SAKURA</view>
			<view class="home__desc">各种模版、功能演示</view>
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
		title: '地图定位相关',
		child: [
			{
				title: '定位',
				path: '/getLocation/getLocation'
			},
		]
	}
	const listData = [
		basicsData
	]
	const onPage = (url : string) => {
		uni.navigateTo({
			url: '/pages/template' + url,
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
