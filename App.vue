<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			uni.hideTabBar()
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}

</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/sakura-ui/index.scss';

	page {
		background: #fff;
	}

	.l-title {
		padding: 32rpx 16rpx 16rpx;
		font-size: 44rpx;
		font-weight: bold;
		width: 100%;
		color: #000;
		display: flex;
		align-items: center;
	}

</style>
