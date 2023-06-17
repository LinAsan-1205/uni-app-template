<template>
	<a :href="href" v-if="isShowA" :class="className" :style="styleName">
		<slot>{{ text }}</slot>
	</a>
	<!-- #ifndef APP-NVUE -->
	<text :class="className" :style="styleName" @click="handleOpenUrl">
		<slot>{{ text }}</slot>
	</text>
	<!-- #endif -->
</template>
<script lang="ts" setup>
	import { computed, ref, toRefs, type PropType } from "vue";
	const props = defineProps({
		//类型，可选值为 default primary info success warning danger	
		type: {
			type: String as PropType<string>,
			default: 'default',
		},
		//跳转地址
		href: {
			type: String as PropType<string>,
			default: "",
		},
		//文字
		text: {
			type: String as PropType<string>,
			default: "",
		},
		//显示下划线
		underline: {
			type: String as PropType<string | unknown>,
			default: 'always',
		},
		//禁用
		disabled: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		//文字颜色
		color: {
			type: String as PropType<string>,
			default: null
		},
		//文字大小
		size: {
			type: [Number, String],
			default: 32,
		},
		copyTips: {
			type: String,
			default: '已自动复制网址，请在手机浏览器里粘贴该网址'
		},
	});
	const { type: mode, text, color, underline, disabled, href, size, copyTips } = toRefs(props);

	const { n, classes } = uni.$sakura.utils.createNamespace('link')

	const isTel = computed(() => href.value && href.value.startsWith('tel:'))

	const isMail = computed(() => href.value && href.value.startsWith('mailto:'))

	const isH5 = ref(false)

	const isShowA = computed(() => {
		// #ifdef H5
		isH5.value = true
		// #endif
		if ((isMail.value || isTel.value) && isH5.value === true) {
			return true;
		}
		return false;
	})

	const className = computed(() => classes(n(), n('--var'), [!color.value, n(`--${mode.value}`)], [underline.value === 'always', n('--line')], [underline.value === 'hover', n('--hover')], [underline.value === 'none', n('--none')], [disabled.value, n('--disabled')]));

	const styleName = computed(() => ({
		fontSize: uni.$sakura.utils.getVal(size.value),
		color: color.value
	}));

	const handleOpenUrl = () => {
		// #ifdef APP-PLUS
		if (isTel.value) {
			uni.makePhoneCall({
				phoneNumber: href.value.replace('tel:', '')
			})
		} else {
			plus.runtime.openURL(href.value);
		}
		// #endif

		// #ifdef H5
		href.value && window.open(href.value)
		// #endif

		// #ifdef MP
		uni.setClipboardData({
			data: href.value
		});
		uni.showModal({
			content: copyTips.value,
			showCancel: false
		});
		// #endif
	}
</script>
<style lang="scss">
	@import './sakura-link.scss';

</style>
