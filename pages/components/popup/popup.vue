<template>
	<view>
		<!-- <sakura-nav-bar title="Popup"></sakura-nav-bar> -->
		<sakura-button type="primary" @click="show=true"> 测试popup </sakura-button>
		<sakura-popup :show="show" @close="onClose" @open="onOpen">
			<view class="content">
				<sakura-text text="素胚勾勒出青花笔锋浓转淡, 瓶身描绘的牡丹一如你初妆, 冉冉檀香透过窗心事我了然, 宣纸上走笔至此搁一半。"></sakura-text>
			</view>
		</sakura-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			};
		},
		methods: {
			onClose() {
				this.show = false
			},
			onOpen() {
				console.log('打开了')
			}
		},
	}

</script>

<style lang="scss">
	.content {
		padding: 20rpx 24rpx;
	}

</style>
