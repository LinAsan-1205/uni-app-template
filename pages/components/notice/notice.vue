<template>
	<view>
		<sakura-nav-bar title="NoticeBar"></sakura-nav-bar>
		<sakura-space vertical>
			<sakura-notice-bar
				text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"></sakura-notice-bar>

			<sakura-notice-bar text="注意，这是一个提醒消息" scrollable></sakura-notice-bar>

			<sakura-notice-bar text="这是一个自定义颜色" color="#fff" background="#1B9C85"></sakura-notice-bar>

			<sakura-notice-bar text="这是一个自定义颜色" color="#fff" background="#F7D060" showRight></sakura-notice-bar>

			<sakura-notice-bar text="这是一个自定义颜色" color="#fff" background="#FF6969" rightIcon="arrow-right" showRight
				mode="link" @click="onClick"></sakura-notice-bar>

			<sakura-notice-bar text="不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。" color="#fff" left-icon="emoji"
				background="#ED2B2A" rightIcon="arrow-right" showRight wrapable mode="link"
				@click="onClick"></sakura-notice-bar>
		</sakura-space>
	</view>
</template>

<script setup lang="ts">
	const onClick = () => {
		console.log(1)
	}
</script>

<style lang="scss">

</style>
