<template>
	<sakura-nav-bar title="小程序隐私协议弹窗"></sakura-nav-bar>
	<sakura-space vertical :size="20" :margin="[32,24]">
		<sakura-button type="primary" @click="open"> 打开隐私</sakura-button>
	</sakura-space>
	<sakura-popup :closeOnClickOverlay="false" :show="showModal" :customNavBar="false" round>
		<view class="privacy">
			<view class="privacy-title">用户隐私保护提示</view>
			<view class="privacy-content">使用前请阅读<sakura-text type="primary" size="28rpx" :text="privacyContractName"
					@click="openPrivacyContract"></sakura-text>，当您点击同意后，即表示您已理解并且同意该条款内容，该条款将对您产生法律约束力。如您拒绝，将无法使用该服务。
			</view>
			<view class="privacy-footer">
				<sakura-button @click="onClose" bgColor="#f3f3f3" width="239rpx" :roundSize="39">
					取消</sakura-button>
				<sakura-button width="239rpx" id="agree-btn" open-type="agreePrivacyAuthorization" :roundSize="39"
					type="primary" @agreeprivacyauthorization="onOk"> 同意</sakura-button>
			</view>
		</view>
	</sakura-popup>
</template>

<script setup>
	import { ref } from 'vue'
	import { onLoad } from "@dcloudio/uni-app"


	const showModal = ref(false)
	const privacyContractName = ref('')
	const open = () => {
		showModal.value = true
	}
	const openPrivacyContract = () => {
		// #ifdef MP-WEIXIN
		wx.openPrivacyContract({
			success: () => {
				console.log('openPrivacyContract success')
			},
			fail: (res) => {
				console.error('openPrivacyContract fail', res)
			}
		})
		// #endif
	}
	onLoad(() => {
		// #ifdef MP-WEIXIN
		wx.getPrivacySetting({
			success: res => {
				if (res.needAuthorization) {
					open()
				}
				privacyContractName.value = res.privacyContractName
			},
			fail: () => {},
			complete: () => {}
		})
		// #endif
	})
	const onClose = () => {
		uni.showToast({
			title: '必须同意后才可以继续使用当前小程序',
			icon: 'none'
		})
	}
	const onOk = () => {
		console.log(2)
		showModal.value = false;
	}

</script>

<style lang="scss" scoped>
	.privacy {
		padding: 40rpx;

		&-title {
			font-size: 32rpx;
			font-weight: bold;
			color: #000000;
			text-align: center;
			margin-bottom: 32rpx;
		}

		&-content {
			color: #999;
			font-size: 28rpx;
			line-height: 50rpx;
		}

		&-footer {
			padding: 0 40rpx;
			margin-top: 32rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}

</style>
