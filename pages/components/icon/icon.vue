<template>
	<view class="icon">
		<sakura-nav-bar fixed title="Icon"></sakura-nav-bar>
		<view class="icon__list">
			<view class="icon__list__item" v-for="(item,index) in icons.glyphs" :key="index">
				<sakura-icon color="#909399" :size="30" :name="item.font_class"></sakura-icon>
				<sakura-text color="#909399">{{item.font_class}}</sakura-text>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import icons from '@/uni_modules/sakura-ui/components/sakura-icon/icon'
</script>

<style lang="scss" scoped>
	.icon {
		padding: 24rpx 32rpx;

		&__list {
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));

			&__item {
				border-right: 1rpx solid #DAD9D9;
				border-bottom: 1rpx solid #DAD9D9;
				padding: 32rpx 24rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;

				:deep(view) {
					width: 100%;
					/* #ifndef APP-NVUE */
					word-wrap: break-word;
					word-break: break-all;
					/* #endif */
					text-align: center !important;
					height: 60rpx;
				}

				&:nth-child(3n) {
					border-right: none;
				}
			}
		}
	}

</style>
