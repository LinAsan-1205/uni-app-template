<template>
	<sakura-nav-bar title="Search"></sakura-nav-bar>
	<view class="sakura-page">
		<sakura-space vertical :size="30" :marginTop="20" :marginRight="20" :marginLeft="20">
			<sakura-search placeholder="请输入关键词" v-model="search" showAction />
			<sakura-search placeholder="请输入关键词" v-model="search" />
			<sakura-search placeholder="输入框禁用" v-model="search" disabled />
			<sakura-search placeholder="输入框禁用" v-model="search" :radius="60" />
		</sakura-space>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	const search = ref('111');
</script>
