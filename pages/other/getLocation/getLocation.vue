<template>
	<view>
		<sakura-nav-bar title="定位"></sakura-nav-bar>
		<sakura-space vertical :size="20" :margin="[32,24]">
			<sakura-button type="primary" @click="onGetLocation"> 普通定位</sakura-button>
			<!-- #ifndef MP -->
			<sakura-button type="primary" @click="onQQMap"> 腾讯地图定位</sakura-button>
			<sakura-button type="primary"> 高德地图定位</sakura-button>
			<!-- #endif -->
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
			onQQMap() {
				this.createQqScript()
			},
			onGetLocation() {
				this.showLoading()
				uni.getLocation({
					type: 'gcj02',
					success: (res) => {
						this.msg(JSON.stringify(res))
						this.hideLoading()
					},
					fail: () => {
						this.msg('定位失败')
						this.hideLoading()
					}
				});
			},
			loadData(data) {
				this.msg(JSON.stringify(data))
			},
			showLoading() {
				uni.showLoading({
					title: '定位中'
				});
			},
			hideLoading() {
				uni.hideLoading();
			},
			msg(title) {
				uni.showToast({
					title,
					icon: "none"
				});
			}
		}
	}

</script>

<style lang="scss" scoped>

</style>

<script module="getLocation" lang="renderjs">
	export default {
		methods: {
			initQqMap() {
				const geolocation = new window.qq.maps.Geolocation("key", "name");
				this.$ownerInstance.callMethod('showLoading')
				geolocation.getLocation((e) => {
					this.$ownerInstance.callMethod('loadData', {
						longitude: e.lng,
						latitude: e.lat,
						city: e.city,
						adcode: e.adcode
					})
					this.$ownerInstance.callMethod('hideLoading')
				}, () => {
					console.log('定位失败')
					this.$ownerInstance.callMethod('msg', '定位失败')
					this.$ownerInstance.callMethod('hideLoading')
				}, { timeout: 100000 })
			},
			createQqScript() {
				const script = document.createElement("script");
				script.type = "text/javascript";
				script.src = `https://mapapi.qq.com/web/mapComponents/geoLocation/v/geolocation.min.js`;
				script.onload = () => {
					console.log('创建腾讯地图定位依赖成功')
					this.initQqMap()
				};
				document.body.appendChild(script);
			}
		}
	}

</script>
