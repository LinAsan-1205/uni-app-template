<template>
	<view>
		<sakura-nav-bar title="Badge"></sakura-nav-bar>

		<sakura-space :margin="[24,32]">
			<sakura-badge :value="10"></sakura-badge>
			<sakura-badge :value="10" type="success"></sakura-badge>
			<sakura-badge :value="10" type="warning"></sakura-badge>
			<sakura-badge :value="10" type="danger"></sakura-badge>
			<sakura-badge :value="10" type="info"></sakura-badge>
			<sakura-badge :value="10" type="purple"></sakura-badge>
		</sakura-space>

		<sakura-space :margin="[24,32]">
			<sakura-badge :value="10" :max="9"></sakura-badge>
			<sakura-badge :value="10" :max="9" type="success"></sakura-badge>
			<sakura-badge :value="10" :max="9" type="warning"></sakura-badge>
			<sakura-badge :value="10" :max="9" type="danger"></sakura-badge>
			<sakura-badge :value="10" :max="9" type="info"></sakura-badge>
			<sakura-badge :value="10" :max="9" type="purple"></sakura-badge>
		</sakura-space>

		<sakura-space :margin="[24,32]">
			<sakura-badge value="news"></sakura-badge>
			<sakura-badge value="news" type="success"></sakura-badge>
			<sakura-badge value="news" type="warning"></sakura-badge>
			<sakura-badge value="news" type="danger"></sakura-badge>
			<sakura-badge value="news" type="info"></sakura-badge>
			<sakura-badge value="news" type="purple"></sakura-badge>
		</sakura-space>

		<sakura-space :margin="[24,32]">
			<sakura-badge :value="10" dot></sakura-badge>
			<sakura-badge :value="10" dot type="success"></sakura-badge>
			<sakura-badge :value="10" dot type="warning"></sakura-badge>
			<sakura-badge :value="10" dot type="danger"></sakura-badge>
			<sakura-badge :value="10" dot type="info"></sakura-badge>
			<sakura-badge :value="10" dot type="purple"></sakura-badge>
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
