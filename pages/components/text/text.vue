<template>
	<view>
		<sakura-nav-bar title="Text"></sakura-nav-bar>
		<sakura-space vertical :margin="[24,32]">
			<sakura-text text="默认色" block align="center"></sakura-text>
			<sakura-text text="主题色" type="primary" block align="center"></sakura-text>
			<sakura-text text="绿色" type="success" block align="center"></sakura-text>
			<sakura-text text="黄色" type="warning" block align="center"></sakura-text>
			<sakura-text text="红色" type="danger" block align="center"></sakura-text>
			<sakura-text text="信息" type="info" block align="center"></sakura-text>
			<sakura-text text="17243124789" type="primary" call mode="phone" block align="center"></sakura-text>
			<sakura-text text="link" mode="link" type="primary" block align="center"></sakura-text>
			<sakura-text text="点我复制" mode="copy" type="primary" block align="center"></sakura-text>
		</sakura-space>
	</view>
</template>
