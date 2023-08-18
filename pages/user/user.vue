<template>
	<view class="user">
		<sakura-nav-bar height="48px" title="我的" :showHomeIcon="false" bgColor="#F5F6F7"
			color="#000000"></sakura-nav-bar>
		<view class="user-content">
			<view class="user-card">
				<view class="user-info">
					<image src="@/static/image/my/avatar.png"></image>
					<view class="user-info-right">
						<view class="user-info-name">小小轩</view>
						<view class="user-info-tag">
							<sakura-space>
								<sakura-tag padding="5rpx 22rpx" background="#F3F3F3" color="#000000">
									<view class="tag">
										<!-- <image src="@/static/image/my/discount.png"></image> -->
										天秤座
									</view>
								</sakura-tag>
								<sakura-tag padding="5rpx 22rpx" background="#F3F3F3" color="#000000">
									<view class="tag">
										<!-- <image src="@/static/image/my/location.png"></image> -->
										深圳
									</view>
								</sakura-tag>
							</sakura-space>
						</view>
					</view>
				</view>
			</view>
		</view>
		<sakura-navigation></sakura-navigation>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}

</script>

<style>
	page {
		background-color: #F5F6F7;
	}

</style>
<style lang="scss" scoped>
	.user {
		&-content {
			padding: 32rpx;
		}

		&-card {
			padding: 32rpx;
			background-color: #fff;
			border-radius: 12rpx;
		}

		&-info {
			display: flex;

			image {
				width: 128rpx;
				height: 128rpx;
				border-radius: 50%;
				margin-right: 32rpx;
			}

			&-name {
				font-size: 32rpx;
				font-weight: bold;
				margin-bottom: 16rpx;
			}

			&-tag {
				display: flex;
				align-items: center;

				.tag {
					display: flex;
					align-items: center;

					image {
						width: 24rpx;
						height: 24rpx;
						margin-right: 8rpx;
					}
				}
			}

			&-right {
				flex: 1;
				display: flex;
				flex-direction: column;
			}
		}
	}

</style>
