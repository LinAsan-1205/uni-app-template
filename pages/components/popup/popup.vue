<template>
	<view>
		<sakura-nav-bar title="Popup"></sakura-nav-bar>
		<sakura-space>
			<sakura-cell title="顶部弹出" @click="showPopup('top')" borderFull></sakura-cell>
			<sakura-cell title="右侧弹出" @click="showPopup('right')" borderFull></sakura-cell>
			<sakura-cell title="左侧弹出" @click="showPopup('left')" borderFull></sakura-cell>
			<sakura-cell title="底部弹出" @click="showPopup('bottom')" borderFull></sakura-cell>
		</sakura-space>
		<sakura-status-bar></sakura-status-bar>
		<sakura-popup :position="position" :show="show" @close="onClose" @open="onOpen">
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
				show: false,
				position: 'bottom'
			};
		},
		methods: {
			showPopup(position) {
				this.position = position
				this.show = true
			},
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
