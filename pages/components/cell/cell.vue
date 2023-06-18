<template>
	<view>
		<sakura-nav-bar title="Cell"></sakura-nav-bar>
		<sakura-space :margin="[24,32]">
			<sakura-cell title="这是单元格" value="内容" leftIcon="github"></sakura-cell>
			<sakura-cell title="这是单元格" value="内容" leftIcon="github"></sakura-cell>
		</sakura-space>

		<sakura-space :margin="[24,32]">
			<sakura-cell title="这是边框单元格" value="内容" leftIcon="github" border></sakura-cell>
			<sakura-cell title="这是边框单元格" value="内容" leftIcon="github" border></sakura-cell>
		</sakura-space>

		<sakura-space :margin="[24,32]">
			<sakura-cell title="这是箭头单元格" arrow border></sakura-cell>
			<sakura-cell title="这是箭头跳转单元格" arrow isLink url="/pages/components/icon/icon" border></sakura-cell>
		</sakura-space>

		<sakura-space :margin="[24,32]">
			<sakura-cell title="这是单元格" value="内容" :center="false" leftIcon="github" description="这是一个描述"></sakura-cell>
			<sakura-cell title="这是居中单元格" value="内容" center leftIcon="github" description="这是一个描述"></sakura-cell>
		</sakura-space>


		<sakura-space :margin="[24,32]">
			<sakura-cell-group border title="我是分组哦">
				<sakura-cell title="这是分组单元格" value="内容" leftIcon="github"></sakura-cell>
				<sakura-cell title="这是分组单元格" value="内容" leftIcon="github"></sakura-cell>
			</sakura-cell-group>
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
