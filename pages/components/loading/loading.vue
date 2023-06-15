<template>
	<view>
		<sakura-nav-bar fixed title="Loading"></sakura-nav-bar>
		<sakura-space vertical :size="60">
			<sakura-loading text="loading"></sakura-loading>
			<sakura-loading text="loading" type="danger"></sakura-loading>
			<sakura-loading text="loading" type="info"></sakura-loading>
			<sakura-loading text="loading" type="success"></sakura-loading>
			<sakura-loading text="loading" type="warning"></sakura-loading>
			<sakura-loading text="loading" type="dark"></sakura-loading>
		</sakura-space>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}

</script>

<style>

</style>
