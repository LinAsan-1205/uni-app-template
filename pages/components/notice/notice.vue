<template>
	<view>
		<sakura-nav-bar title="NoticeBar"></sakura-nav-bar>
		<sakura-space vertical>
			<sakura-notice-bar
				text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"></sakura-notice-bar>

			<sakura-notice-bar text="注意，这是一个提醒消息" scrollable></sakura-notice-bar>
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

</style>
