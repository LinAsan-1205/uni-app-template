<template>
	<view>
		<sakura-nav-bar title="NavBar导航" fontSize="14px" :fixed="true"></sakura-nav-bar>
		<sakura-space :marginTop="20" vertical :size="40">
			<sakura-nav-bar title="渐变色" bgColor="linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)"
				color="#fff"></sakura-nav-bar>
			<sakura-nav-bar title="渐变色" bgColor="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
				color="#fff"></sakura-nav-bar>
			<sakura-nav-bar title="个人中心" rightIcon="all" bgColor="#8338ec" color="#fff"></sakura-nav-bar>
			<sakura-nav-bar title="购物车" rightIcon="all" bgColor="#2ec4b6" color="#fff"></sakura-nav-bar>
			<sakura-nav-bar title="自定义插槽" rightIcon="all">
				<template #left>
					长沙市
				</template>
				插槽
				<template #right>
					芙蓉区
				</template>
			</sakura-nav-bar>
		</sakura-space>
	</view>
</template>
<script setup lang="ts"></script>
