<template>
	<view>
		<sakura-nav-bar title="DateTime"></sakura-nav-bar>
		<sakura-space vertical :size="20" :margin="[24,32]">
			<sakura-button type="primary" @click="show=true">单列选择器</sakura-button>
		</sakura-space>
		<sakura-date-time title="单列选择器" v-model="show"></sakura-date-time>
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
