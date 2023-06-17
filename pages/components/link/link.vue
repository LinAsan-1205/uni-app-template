<template>
	<view>
		<sakura-nav-bar title="Link"></sakura-nav-bar>
		<sakura-space :margin="20">
			<sakura-link>默认链接</sakura-link>
			<sakura-link type="primary" disabled>主要链接</sakura-link>
			<sakura-link type="info">信息链接</sakura-link>
			<sakura-link type="success">成功链接</sakura-link>
			<sakura-link type="warning">警告链接</sakura-link>
			<sakura-link type="danger">危险链接</sakura-link>
		</sakura-space>

		<sakura-space :margin="20">
			<sakura-link type="primary">始终显示</sakura-link>
			<sakura-link type="primary" underline="hover">悬停显示</sakura-link>
			<sakura-link type="primary" underline="none">不显示</sakura-link>
		</sakura-space>

		<sakura-space :margin="20">
			<sakura-link color="#E966A0">链接</sakura-link>
			<sakura-link color="#6554AF">链接</sakura-link>
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
