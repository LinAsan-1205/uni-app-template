<template>
	<view>
		<sakura-nav-bar title="Divider"></sakura-nav-bar>
		<sakura-space vertical :margin="[24,32]">
			<sakura-divider></sakura-divider>
			<sakura-divider dashed></sakura-divider>
			<sakura-divider dashed text="1111"></sakura-divider>
			<view class="flex">
				<text>文字</text>
				<sakura-divider vertical></sakura-divider>
				<text>文字</text>
				<sakura-divider vertical></sakura-divider>
				<text>文字</text>
				<sakura-divider vertical></sakura-divider>
			</view>
			<sakura-divider dashed text="0.5"></sakura-divider>
			<sakura-divider dashed text="自定义内容" textColor="#FF2171" lineColor="#FF2171">
				<view class="text">
					<sakura-icon name="like" color="#FF2171"></sakura-icon>
				</view>
			</sakura-divider>
			<sakura-divider dashed text="自定义边距" :margin="30" textColor="#FFA41B" lineColor="#FFA41B"></sakura-divider>
			<sakura-divider dashed text="自定义颜色" textColor="#FF2171" lineColor="#FF2171"></sakura-divider>

			<sakura-divider dashed text="自定义位置" position="left" textColor="#FF2171"
				lineColor="#FF2171"></sakura-divider>

			<sakura-divider dashed text="自定义位置" position="right" textColor="#9575DE"
				lineColor="#9575DE"></sakura-divider>
		</sakura-space>
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

<style lang="scss">
	.flex {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #333;
		font-size: 24rpx;
	}

	.text {
		padding: 0 20rpx;
	}

</style>
