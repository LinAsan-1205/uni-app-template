<template>
	<view>
		<sakura-nav-bar title="Tag"></sakura-nav-bar>
		<sakura-space :margin="[24,32]">
			<sakura-tag text="标签一"></sakura-tag>
			<sakura-tag text="标签二" type="success"></sakura-tag>
			<sakura-tag text="标签三" type="warning"></sakura-tag>
			<sakura-tag text="标签四" type="danger"></sakura-tag>
			<sakura-tag text="标签五" type="purples"></sakura-tag>
		</sakura-space>
		<sakura-space :margin="[24,32]">
			<sakura-tag text="标签一" light></sakura-tag>
			<sakura-tag text="标签二" type="success" light></sakura-tag>
			<sakura-tag text="标签三" type="warning" light></sakura-tag>
			<sakura-tag text="标签四" type="danger" light></sakura-tag>
			<sakura-tag text="标签五" type="purples" light></sakura-tag>
		</sakura-space>

		<sakura-space :margin="[24,32]">
			<sakura-tag text="标签一" plain></sakura-tag>
			<sakura-tag text="标签二" type="success" plain></sakura-tag>
			<sakura-tag text="标签三" type="warning" plain></sakura-tag>
			<sakura-tag text="标签四" type="danger" plain></sakura-tag>
			<sakura-tag text="标签五" type="purples" plain></sakura-tag>
		</sakura-space>

		<sakura-space :margin="[24,32]">
			<sakura-tag text="标签一" color="#fff" background="#FF78C4"></sakura-tag>
			<sakura-tag text="标签二" color="#fff" background="#F2BE22"></sakura-tag>
			<sakura-tag text="标签三" color="#fff" background="#99DBF5"></sakura-tag>
			<sakura-tag text="标签四" color="#fff" background="#A7ECEE"></sakura-tag>
		</sakura-space>

		<sakura-space :margin="[24,32]">
			<sakura-tag text="标签一" color="#FF78C4" background="#fff" borderColor="#FF78C4"></sakura-tag>
			<sakura-tag text="标签二" color="#F2BE22" background="#fff" borderColor="#F2BE22"></sakura-tag>
			<sakura-tag text="标签三" color="#99DBF5" background="#fff" borderColor="#99DBF5"></sakura-tag>
			<sakura-tag text="标签四" color="#A7ECEE" background="#fff" borderColor="#A7ECEE"></sakura-tag>
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
