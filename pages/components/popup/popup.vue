<template>
	<view>
		<!-- <sakura-nav-bar title="Popup"></sakura-nav-bar> -->
		<sakura-button type="primary" @click="show=true"> 测试popup </sakura-button>
		<sakura-popup :show="show">111</sakura-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			};
		}
	}

</script>

<style lang="scss">

</style>
