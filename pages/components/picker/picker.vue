<template>
	<view>
		<sakura-nav-bar title="Picker"></sakura-nav-bar>
		<sakura-space vertical :size="20" :margin="[24,32]">
			<sakura-button type="primary" @click="onOne">单列选择器</sakura-button>
			<sakura-button type="primary" @click="onMultiple">多列选择器</sakura-button>
			<sakura-button type="primary" @click="onMultiple">多列联动</sakura-button>
		</sakura-space>
		<sakura-picker v-model="showPicker" :columns="columns" @change="onChange"></sakura-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPicker: false,
				columns: []
			};
		},
		methods: {
			onOne() {
				this.columns = [
					Array.from({ length: 20 }).map((_, index) => '测试' + index + 1),
				]
				this.showPicker = true
			},
			onMultiple() {
				this.columns = [
					Array.from({ length: 20 }).map((_, index) => index + 1),
					Array.from({ length: 20 }).map((_, index) => index + 1),
					Array.from({ length: 20 }).map((_, index) => index + 1),
				]
				this.showPicker = true
			},
			onChange(val) {}
		}
	}

</script>

<style lang="scss">

</style>
