<template>
	<sakura-nav-bar title="Navbar"></sakura-nav-bar>
	<view>
		<sakura-space vertical>
			<view class="l-title">自定义颜色</view>
			<sakura-nav-bar :fixed="false" leftColor="#fff" title="渐变色"
				bgColor="linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)" color="#fff"></sakura-nav-bar>
			<sakura-nav-bar :fixed="false" leftColor="#fff" title="渐变色"
				bgColor="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)" color="#fff"></sakura-nav-bar>
			<view class="l-title">自定义图标</view>
			<sakura-nav-bar :fixed="false" title="个人中心" leftColor="#fff" rightIcon="all" bgColor="#8338ec" color="#fff"
				rightColor="#fff"></sakura-nav-bar>
			<sakura-nav-bar :fixed="false" title="购物车" leftColor="#fff" rightIcon="all" bgColor="#2ec4b6" color="#fff"
				rightColor="#fff"></sakura-nav-bar>
			<view class="l-title">自定义插槽</view>
			<sakura-nav-bar :fixed="false" title="自定义插槽" rightIcon="all">
				<template #left>
					<text class="name">长沙市</text>
				</template>
				<text class="name">标题文字</text>
				<template #right>
					<text class="name">芙蓉区</text>
				</template>
			</sakura-nav-bar>
			<sakura-nav-bar :fixed="false" rightIcon="all">
				<template #left>
					<sakura-search :radius="30" placeholder="请输入关键字"></sakura-search>
				</template>
				<template #right>
					<text class="name">芙蓉区</text>
				</template>
			</sakura-nav-bar>
		</sakura-space>
	</view>
</template>
<script setup lang="ts"></script>

<style lang="scss">
	page {
		background-color: #f6f6f6;
	}

	.name {
		color: #000;
		font-size: 28rpx;
	}

</style>
