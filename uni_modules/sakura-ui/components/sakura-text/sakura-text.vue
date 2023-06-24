<template>
	<view v-if="show" :style="styleName" :class="className" @tap="handleClick">
		<template v-if="slot.default">
			<slot />
		</template>
		<template v-else-if="mode === 'link'">
			<sakura-link :text="text" :href="href" :size="fontSize" />
		</template>
		<template v-else>
			{{ getText }}
		</template>
	</view>
</template>

<!-- #ifdef MP-WEIXIN -->
<script lang="ts">
	export default {
		options: { virtualHost: true }
	}
</script>
<!-- #endif -->
<script lang="ts" setup>
	import { toRefs, computed, useSlots } from "vue";

	const props = defineProps({
		show: {
			type: Boolean,
			default: true
		},
		/**
		 * 类型
		 * @desc primary / success / warning / danger / info / text
		 */
		type: {
			type: String,
			default: "default",
		},
		//块状
		block: {
			type: Boolean,
			default: false,
		},
		//字体颜色
		color: {
			type: String,
			default: "",
		},
		//内容
		text: {
			type: String,
			default: "文本内容",
		},
		//跳转地址
		href: {
			type: String,
			default: "",
		},
		//文本类型
		mode: {
			type: String,
			default: "text",
			validator: (value : string) => ["text", "phone", 'date', 'link', 'copy'].indexOf(value) >= 0,
		},
		//格式化
		format: {
			type: Boolean,
			default: false,
		},
		//超出n行隐藏
		line: {
			type: Number
		},
		//文字大小 xs sm md lg
		size: {
			type: [String, Number],
			default: null,
		},
		fontWeight: {
			type: String,
			default: "400",
		},
		//对齐方式 "left" | "center" | "right"
		align: {
			type: String,
			default: "left",
		},
		//文本的修饰 "none" | "underline"
		decoration: {
			type: String,
			default: "none",
		},
		//拨打电话
		call: {
			type: Boolean,
			default: false,
		},
		//复制成功信息
		copySuccess: {
			type: String,
			default: "复制成功",
		},
		//复制失败信息
		copyFail: {
			type: String,
			default: "复制失败",
		}
	});
	const emit = defineEmits(['click'])
	const {
		show,
		type,
		mode,
		text,
		size,
		line,
		color,
		block,
		fontWeight,
		align,
		decoration,
		call,
		format,
		copySuccess,
		copyFail
	} = toRefs(props);
	const slot = useSlots();

	const { n, classes } = uni.$sakura.utils.createNamespace('text')

	const fontSizeType = ['xs', 'sm', 'md', 'lg']

	const fontSize = computed(() => {
		if (fontSizeType.includes(size.value)) {
			return null
		}
		return uni.$sakura.utils.getVal(size.value)
	})

	const className = computed(() => classes(n(), n('--var'), [type.value && true, n(`--${type.value}`)], [block.value, n('--block')], [fontSizeType.includes(size.value), n(`--${size.value}`)],
		[line.value & line.value > 0, n(`--line--${line.value}`)]
	));

	const styleName = computed(() => ({
		fontSize: fontSize.value,
		color: color.value,
		fontWeight: fontWeight.value as any,
		textAlign: align.value,
		textDecoration: decoration.value,
	}));

	const isMobile = computed(
		() =>
			mode.value === "phone" &&
			/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(text.value)
	);

	const getText = computed(() => {
		if (isMobile.value && format.value) {
			return text.value.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
		}
		return text.value;
	});

	const handleClick = () => {
		if (call.value && !isMobile.value) {
			uni.showToast({
				title: "手机号格式不正确",
				icon: "none"
			})
			return
		}
		if (call.value && isMobile.value) {
			uni.makePhoneCall({
				phoneNumber: text.value,
			});
			return
		}
		if (mode.value == 'copy' && !slot.default) {
			uni.setClipboardData({
				data: text.value,
				showToast: false,
				success: function () {
					uni.showToast({
						title: copySuccess.value,
						icon: "none"
					})
				},
				fail: function () {
					uni.showToast({
						title: copyFail.value,
						icon: "none"
					})
				}
			});
			return
		}
		emit('click')
	};
</script>
<style lang="scss" scoped>
	@import "./sakura-text.scss";

</style>
