<template>
	<view class="sakura">
		<sakura-nav-bar title="配色"></sakura-nav-bar>
		<view class="sakura-page pb-4">
			<view class="l-title"><zui-svg-icon icon="color" width="54rpx"></zui-svg-icon>文字、背景</view>
			<sakura-space vertical :size="20">
				<view class="item">
					<view :style="{background:'var(--sakura-color-primary-base)'}" class="bg"></view>
					<view :style="{background:`var(--sakura-color-primary-light-${item})`}" class="bg" v-for="item in 5"
						:key="item"></view>
				</view>
				<view class="item">
					<view :style="{background:'var(--sakura-color-success-base)'}" class="bg"></view>
					<view :style="{background:`var(--sakura-color-success-light-${item})`}" class="bg" v-for="item in 5"
						:key="item"></view>
				</view>
				<view class="item">
					<view :style="{background:'var(--sakura-color-warning-base)'}" class="bg"></view>
					<view :style="{background:`var(--sakura-color-warning-light-${item})`}" class="bg" v-for="item in 5"
						:key="item"></view>
				</view>
				<view class="item">
					<view :style="{background:'var(--sakura-color-danger-base)'}" class="bg"></view>
					<view :style="{background:`var(--sakura-color-danger-light-${item})`}" class="bg" v-for="item in 5"
						:key="item"></view>
				</view>
				<view class="item">
					<view :style="{background:'var(--sakura-color-purples-base)'}" class="bg"></view>
					<view :style="{background:`var(--sakura-color-purples-light-${item})`}" class="bg" v-for="item in 5"
						:key="item"></view>
				</view>
				<view class="item">
					<view :style="{background:'var(--sakura-color-info-base)'}" class="bg"></view>
					<view :style="{background:`var(--sakura-color-info-light-${item})`}" class="bg" v-for="item in 5"
						:key="item"></view>
				</view>
				<view class="item">
					<view :style="{background:'var(--sakura-color-dark-base)'}" class="bg"></view>
					<view :style="{background:`var(--sakura-color-dark-light-${item})`}" class="bg" v-for="item in 5"
						:key="item"></view>
				</view>
			</sakura-space>
		</view>
	</view>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
	.sakura {
		&-page {
			padding: 20rpx;
		}

		.item {
			display: grid;
			grid-template-columns: repeat(6, minmax(0, 1fr));
			gap: 0;

			.bg {
				height: 110rpx;

				&:first-child {
					border-top-left-radius: 24rpx;
					border-bottom-left-radius: 24rpx;
				}

				&:last-child {
					border-top-right-radius: 24rpx;
					border-bottom-right-radius: 24rpx;
				}
			}
		}
	}

</style>
