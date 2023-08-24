<template>
	<sakura-nav-bar title="全屏加载"></sakura-nav-bar>
	<sakura-button type="primary" block @click="showLoading">显示</sakura-button>
	<sakura-fullscreen-loading :loading="loading"></sakura-fullscreen-loading>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	const loading = ref(false)

	const showLoading = () => {
		loading.value = true

		setTimeout(() => {
			loading.value = false
		}, 3000)
	}
</script>

<style lang="scss">

</style>
