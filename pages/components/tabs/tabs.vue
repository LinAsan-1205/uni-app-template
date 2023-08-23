<template>
	<sakura-nav-bar title="选项卡"></sakura-nav-bar>

	<sakura-tabs v-model="currentValue" :list="list" @change="onClick"></sakura-tabs>

	<sakura-tabs v-model="currentValue2" :list="list"></sakura-tabs>

	<sakura-tabs v-model="currentValue3" :list="list"></sakura-tabs>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'
	const currentValue = ref('1');
	const currentValue2 = ref('2');
	const currentValue3 = ref('3');
	const list = [
		{
			value: '1',
			label: '选项一',
			icon: {
				name: 'search'
			}
		},
		{
			value: '2',
			label: '选项二',
		},
		{
			value: '3',
			label: '选项三',
		},
	];

	const onClick = (item) => {
		currentValue.value = item.item.value
	}
</script>

<style lang="scss">

</style>
