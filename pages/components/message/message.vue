<template>
	<view>
		<sakura-nav-bar title="Message"></sakura-nav-bar>
		<sakura-space :margin="[0,32]" vertical>
			<view class="l-title">默认颜色</view>
			<sakura-button type="primary" block @click="open('primary','默认提示')">默认提示</sakura-button>
			<sakura-button type="success" block @click="open('success','成功')">成功</sakura-button>
			<sakura-button type="warning" block @click="open('warning','警告')">警告</sakura-button>
			<sakura-button type="danger" block @click="open('error','错误')">错误</sakura-button>
			<sakura-button type="info" block @click="open('info','消息')">消息</sakura-button>
		</sakura-space>
		<sakura-message ref="message"></sakura-message>
	</view>
</template>

<script setup>
	import { ref } from "vue";
	const message = ref()
	const open = (type, title) => {
		message.value[type](title)
	}

</script>

<style lang="scss">

</style>
