<template>
	<view>
		<view class="navigation">
			<view class="navigation-list">
				<view class="navigation-list-item" @click="onPages(item.pagePath)"
					:class="[item.pagePath===path&&'navigation-list-item-active']"
					v-for="(item,index) in navigationList" :key="index">
					<image class="navigation-list-item--image"
						:src="item.pagePath===path?item.selectedIconPath:item.iconPath" mode=""></image>
					<text v-if="item.pagePath===path" class="navigation-list-item--text">{{item.text}}</text>
				</view>
			</view>
		</view>
		<view class="placeholder"></view>
	</view>
</template>
<script setup>
	import { computed, ref } from "vue";
	const navigationList = ref([{
			pagePath: 'pages/index/index',
			iconPath: '/static/image/navigation/components.png',
			selectedIconPath: '/static/image/navigation/components-active.png',
			text: '组件'
		},
		{
			pagePath: 'pages/template/template',
			iconPath: '/static/image/navigation/template.png',
			selectedIconPath: '/static/image/navigation/template-active.png',
			text: '模版'
		},
		{
			pagePath: 'pages/utils/utils',
			iconPath: '/static/image/navigation/template.png',
			selectedIconPath: '/static/image/navigation/template-active.png',
			text: '工具'
		},
		{
			pagePath: 'pages/user/user',
			iconPath: '/static/image/navigation/user.png',
			selectedIconPath: '/static/image/navigation/user-active.png',
			text: '我的'
		},
	])

	const path = computed(() => {
		let currentPages = getCurrentPages();
		let page = currentPages[currentPages.length - 1];
		return page.route
	})

	const onPages = (path) => {
		uni.switchTab({
			url: '/' + path
		})
	}

</script>
<style scoped lang="scss">
	.placeholder {
		height: 70rpx;
		padding: 20rpx;
	}

	.navigation {
		background-color: #fff;
		box-sizing: content-box;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;
		padding: 20rpx;
		padding-bottom: 20rpx;
		/* #ifndef H5 */
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		/* #endif */

		&-list {
			height: 70rpx;
			/* #ifndef APP-NVUE */
			display: grid;
			grid-template-columns: repeat(4, minmax(0, 1fr));

			/* #endif */
			&-item {
				border-radius: 100rpx;
				/* #ifndef APP-NVUE */
				display: flex;
				/* #endif */
				align-items: center;
				justify-content: center;
				height: 100%;
				border-radius: 100rpx;
				padding: 0 32rpx;


				&--image {
					width: 38rpx;
					height: 38rpx;
				}

				&--text {
					font-size: 28rpx;
					color: #333333;
					font-weight: bold;
				}

				&-active {
					justify-content: space-between;
					background-color: #1a5cff;

					text {
						color: #ffffff;
					}
				}
			}

		}
	}

</style>
