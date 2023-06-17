<template>
	<view>
		<sakura-nav-bar title="Avatar"></sakura-nav-bar>
		<sakura-space :size="40" :margin="20" align="center">
			<sakura-avatar :src="image" size="mini"></sakura-avatar>
			<sakura-avatar :src="image" size="small"></sakura-avatar>
			<sakura-avatar :src="image" size="default"></sakura-avatar>
			<sakura-avatar :src="image" size="large"></sakura-avatar>
		</sakura-space>

		<sakura-space :size="40" :margin="20" align="center">
			<sakura-avatar-group>
				<sakura-avatar :src="image"></sakura-avatar>
				<sakura-avatar :src="image"></sakura-avatar>
				<sakura-avatar :src="image"></sakura-avatar>
				<sakura-avatar text="+2" textColor="#fff" fontSize="20rpx"></sakura-avatar>
			</sakura-avatar-group>
		</sakura-space>

		<sakura-space :size="40" :margin="20" align="center">
			<sakura-avatar-group vertical>
				<sakura-avatar :src="image"></sakura-avatar>
				<sakura-avatar :src="image"></sakura-avatar>
				<sakura-avatar :src="image"></sakura-avatar>
				<sakura-avatar text="+2" textColor="#fff" fontSize="20rpx"></sakura-avatar>
			</sakura-avatar-group>
		</sakura-space>
	</view>
</template>

<script lang="ts" setup>
	const image = 'https://avatars.githubusercontent.com/u/29006268?v=4'
</script>

<style lang="scss" scoped>

</style>
