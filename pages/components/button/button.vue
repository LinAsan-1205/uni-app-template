<template>
	<sakura-nav-bar title="Button"></sakura-nav-bar>
	<view class="sakura-page">
		<view class="l-title">基础按钮</view>
		<view class="l-desc">默认几种常见的颜色</view>
		<sakura-space vertical :size="20">
			<sakura-button type="primary"> 页面次要操作</sakura-button>
			<sakura-button type="default"> 页面次要操作 </sakura-button>
			<sakura-button type="success"> 页面辅助按钮 </sakura-button>
			<sakura-button type="warning"> 页面辅助按钮 </sakura-button>
			<sakura-button type="danger"> 页面辅助按钮 </sakura-button>
			<sakura-button type="info"> 页面辅助按钮 </sakura-button>
		</sakura-space>
		<view class="l-title">按钮尺寸</view>
		<view class="l-desc">可自定义高度、宽度</view>
		<sakura-space :size="20">
			<sakura-button type="primary" :width="260" :height="80"> 页面主操作 </sakura-button>
			<sakura-button type="primary" :width="230" :height="70"> 页面主操作 </sakura-button>
			<sakura-button type="primary" :width="200" :height="60"> 页面主操作 </sakura-button>
		</sakura-space>
		<view class="l-title">按钮阴影</view>
		<sakura-space vertical :size="20">
			<sakura-button type="primary" shadow> 页面主操作 </sakura-button>
			<sakura-button type="danger" shadow> 页面主操作 </sakura-button>
		</sakura-space>
		<view class="l-title">空心按钮</view>
		<sakura-space vertical :size="20">
			<sakura-button type="primary" plain> 页面主操作 </sakura-button>
			<sakura-button type="default" plain> 页面次要操作 </sakura-button>
			<sakura-button type="success" plain> 页面辅助按钮 </sakura-button>
			<sakura-button type="warning" plain> 页面辅助按钮 </sakura-button>
			<sakura-button type="danger" plain> 页面辅助按钮 </sakura-button>
			<sakura-button type="info" plain> 页面辅助按钮 </sakura-button>
		</sakura-space>
		<view class="l-title">加载按钮</view>
		<sakura-space vertical :size="20">
			<sakura-button type="primary" loading round> 页面主操作 </sakura-button>
			<sakura-button type="default" loading round> 页面次要操作 </sakura-button>
			<sakura-button type="success" loading round> 页面辅助按钮 </sakura-button>
			<sakura-button type="warning" loading round> 页面辅助按钮 </sakura-button>
			<sakura-button type="danger" loading round> 页面辅助按钮 </sakura-button>
			<sakura-button type="info" loading round> 页面辅助按钮 </sakura-button>
			<sakura-button type="primary" loading round :roundSize="100"> 自定义圆角 </sakura-button>
		</sakura-space>
		<view class="l-title">icon按钮</view>
		<sakura-space :size="20">
			<sakura-button type="primary" loading :iconSize="75" :loadingSize="20" shadow round icon>
				<sakura-icon name="github"></sakura-icon>
			</sakura-button>
			<sakura-button type="danger" loading :loadingSize="20" shadow round icon>
				<sakura-icon name="github" color="#fff"></sakura-icon></sakura-button>
			<sakura-button type="warning" shadow round icon>
				<sakura-icon name="github" color="#fff"></sakura-icon></sakura-button>
			<sakura-button type="success" shadow round icon>
				<sakura-icon name="github" color="#fff"></sakura-icon></sakura-button>
		</sakura-space>
		<view class="l-title">loading按钮</view>
		<sakura-space vertical :size="20">
			<sakura-button type="primary" disabled round loading> 页面次要操作 </sakura-button>
		</sakura-space>
		<view class="l-title">自定义颜色</view>
		<sakura-space vertical :size="20">
			<sakura-button type="primary" round bgColor="#fd79a8"> 粉色 </sakura-button>
			<sakura-button type="primary" round bgColor="#6c5ce7"> 紫色 </sakura-button>
			<sakura-button type="primary" bgColor="linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)"> 渐变色
			</sakura-button>
		</sakura-space>
	</view>
</template>
<style lang="scss">
	.sakura {
		&-page {
			padding: 20rpx;
		}

		.icon {
			display: flex;
		}
	}

</style>
