<template>
	<view>
		<view class="navigation">
			<view class="navigation-list">
				<view class="navigation-list-item" @click="onPages(index)"
					:class="[active===index&&'navigation-list-item-active',item.id]"
					v-for="(item,index) in navigationList" :key="index">
					<zui-svg-icon v-if="item.icon" :icon="item.icon" :color="active===index?'#fff':'#000'"
						width="34rpx"></zui-svg-icon>
					<text v-if="active===index" class="navigation-list-item--text">{{item.text}}</text>
				</view>
			</view>
			<view class="active" :style="activeStyle"></view>
		</view>
		<view class="placeholder"></view>
	</view>
</template>
<script setup>
	import { computed, nextTick, ref, getCurrentInstance, reactive } from "vue";
	const navigationList = ref([{
			pagePath: 'pages/index/index',
			icon: 'home',
			text: '组件',
			id: 'home'
		},
		{
			pagePath: 'pages/template/template',
			icon: 'template',
			text: '模版',
			id: 'template'
		},
		{
			pagePath: 'pages/module/module',
			icon: 'tools',
			text: '工具',
			id: 'tools'
		},
		{
			pagePath: 'pages/user/user',
			icon: 'user',
			text: '我的',
			id: 'user'
		},
	])
	const instance = getCurrentInstance();
	const activeState = reactive({
		width: 0,
		height: 0,
		left: 0,
		top: 0,
		transition: null
	})
	const active = ref(0)
	const path = computed(() => {
		let currentPages = getCurrentPages();
		let page = currentPages[currentPages.length - 1];
		return page.route
	})

	const { screenHeight, safeArea } = uni.getSystemInfoSync()

	const activeStyle = computed(() => {
		return {
			width: activeState.width + 'px',
			height: activeState.height + 'px',
			left: activeState.left + 'px',
			top: `calc(50% - ${uni.upx2px(screenHeight-safeArea.bottom)}px)`,
			transform: ` translateY(-calc(50% - ${uni.upx2px(screenHeight-safeArea.bottom)}px))`,
			transition: activeState.transition
		}
	})
	const onPages = (index) => {
		active.value = index
		activeState.transition = 'left .3s'
		getActive()
	}

	const getActive = () => {
		const className = navigationList.value[active.value].id
		const query = uni.createSelectorQuery().in(instance);
		query.select(`.${className}`).boundingClientRect(data => {
			activeState.width = data.width
			activeState.height = data.height
			activeState.left = data.left
			// activeState.top = data.top - 
		}).exec();
	}

	nextTick(() => {
		getActive()
	})

</script>
<style scoped lang="scss">
	.placeholder {
		height: 70rpx;
		padding: 20rpx;

		/* #ifndef H5 */
		padding-bottom: calc(20rpx + constant(safe-area-inset-bottom));
		padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
		/* #endif */
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
		padding-bottom: calc(20rpx + constant(safe-area-inset-bottom));
		padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
		/* #endif */

		.active {
			position: absolute;
			left: 0;
			// bottom: 0;
			height: 70rpx;
			background-color: #0052d9;
			top: 50%;
			transform: translateY(-50%);
			border-radius: 100rpx;

			/* #ifndef H5 */
			top: calc(50% + constant(safe-area-inset-bottom));
			top: calc(50% + env(safe-area-inset-bottom));
			/* #endif */
		}

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
				padding: 0 32rpx;
				z-index: 1;
				transition: color .3s;


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
					// background-color: #0052d9;

					text {
						color: #ffffff;
					}
				}
			}

		}
	}

</style>
