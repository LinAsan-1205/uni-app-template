<template>
	<view>
		<sakura-nav-bar title="Alert"></sakura-nav-bar>
		<view class="l-title">基础</view>
		<sakura-space vertical :margin="[0,32]" :size="30">
			<sakura-alert description="哎呀，回到家真好"></sakura-alert>
			<sakura-alert type="success" description="哎呀，回到家真好"></sakura-alert>
			<sakura-alert type="warning" description="哎呀，回到家真好"></sakura-alert>
			<sakura-alert type="error" description="哎呀，回到家真好"></sakura-alert>
		</sakura-space>
		<view class="l-title">显示图标</view>
		<sakura-space vertical :margin="[0,32]" :size="30">
			<sakura-alert description="哎呀，回到家真好" showIcon></sakura-alert>
			<sakura-alert description="哎呀，回到家真好" type="success" showIcon></sakura-alert>
			<sakura-alert description="哎呀，回到家真好" type="warning" showIcon></sakura-alert>
			<sakura-alert description="哎呀，回到家真好" type="error" showIcon></sakura-alert>
			<sakura-alert description="哎呀，回到家真好" type="info" showIcon></sakura-alert>
		</sakura-space>
		<view class="l-title">可关闭</view>
		<sakura-space vertical :margin="[0,32]" :size="30">
			<sakura-alert description="哎呀，回到家真好" type="error" showIcon showClose></sakura-alert>
		</sakura-space>
		<view class="l-title">带标题</view>
		<sakura-space vertical :margin="[0,32]" :size="30">
			<sakura-alert title="标题" description="哎呀，回到家真好" type="success" showIcon></sakura-alert>
		</sakura-space>
	</view>
</template>

<script setup lang="ts">

</script>

<style lang="scss">

</style>
