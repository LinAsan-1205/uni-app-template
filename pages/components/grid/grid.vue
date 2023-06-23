<template>
	<view>
		<sakura-nav-bar fixed title="Grid"></sakura-nav-bar>

		<view class="grid">
			<sakura-grid :col="4" @change="onChange">
				<sakura-grid-item name="1">
					<sakura-icon name="github"></sakura-icon>
					<sakura-text text="测试" size="24rpx"></sakura-text>
				</sakura-grid-item>
				<sakura-grid-item>
					<sakura-icon name="github"></sakura-icon>
					<sakura-text text="测试" size="24rpx"></sakura-text>
				</sakura-grid-item>
				<sakura-grid-item>
					<sakura-icon name="github"></sakura-icon>
					<sakura-text text="测试" size="24rpx"></sakura-text>
				</sakura-grid-item>
				<sakura-grid-item>
					<sakura-icon name="github"></sakura-icon>
					<sakura-text text="测试" size="24rpx"></sakura-text>
				</sakura-grid-item>
			</sakura-grid>
		</view>
		<view class="grid">
			<sakura-grid :col="3" :border="false">
				<sakura-grid-item>
					<sakura-icon name="github"></sakura-icon>
					<sakura-text text="测试" size="24rpx"></sakura-text>
				</sakura-grid-item>
				<sakura-grid-item>
					<sakura-icon name="github"></sakura-icon>
					<sakura-text text="测试" size="24rpx"></sakura-text>
				</sakura-grid-item>
				<sakura-grid-item>
					<sakura-icon name="github"></sakura-icon>
					<sakura-text text="测试" size="24rpx"></sakura-text>
				</sakura-grid-item>
			</sakura-grid>
		</view>
		<view class="grid">
			<sakura-grid :col="4" borderColor="#22A699">
				<sakura-grid-item>
					<sakura-icon name="github"></sakura-icon>
					<sakura-text text="测试" size="24rpx"></sakura-text>
				</sakura-grid-item>
				<sakura-grid-item>
					<sakura-icon name="github"></sakura-icon>
					<sakura-text text="测试" size="24rpx"></sakura-text>
				</sakura-grid-item>
				<sakura-grid-item>
					<sakura-icon name="github"></sakura-icon>
					<sakura-text text="测试" size="24rpx"></sakura-text>
				</sakura-grid-item>
				<sakura-grid-item>
					<sakura-icon name="github"></sakura-icon>
					<sakura-text text="测试" size="24rpx"></sakura-text>
				</sakura-grid-item>
			</sakura-grid>
		</view>
	</view>
</template>

<script setup lang="ts">
	const onChange = (name : string) => {
		console.log(name, 'name')
	}
</script>

<style lang="scss" scoped>
	.grid {
		padding: 32rpx;
	}

</style>
