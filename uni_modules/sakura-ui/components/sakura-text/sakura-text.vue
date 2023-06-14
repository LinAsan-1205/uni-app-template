<template>
	<view class="sakura-text" :style="styleName" :class="className" @click="handleClick">
		<template v-if="slot.default">
			<slot />
		</template>
		<template v-else-if="mode === 'link'">
			<l-link :text="text" :href="href" :size="fontSize" :showUnderLine="true" />
		</template>
		<template v-else>
			{{ getText }}
		</template>
	</view>
</template>
<script lang="ts" setup>
	import { type PropType, toRefs, computed, useSlots } from "vue";

	const props = defineProps({
		/**
		 * 类型
		 * @desc primary / success / warning / danger / info / text
		 */
		type: {
			type: String as PropType<string>,
			default: "default",
		},
		//块状
		block: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		//字体颜色
		color: {
			type: String as PropType<string>,
			default: "",
		},
		//内容
		text: {
			type: String as PropType<string>,
			default: "文本内容",
		},
		//跳转地址
		href: {
			type: String as PropType<string>,
			default: "",
		},
		//文本类型
		mode: {
			type: String as PropType<string>,
			default: "text",
			validator: (value : string) => ["text", "phone", 'date', 'link', 'copy'].indexOf(value) >= 0,
		},
		//格式化
		format: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		//超出n行隐藏
		lines: {
			type: Number as PropType<number>,
			default: null
		},
		//文字大小
		size: {
			type: [String, Number] as PropType<string | number>,
			default: 32,
		},
		fontWeight: {
			type: String as PropType<string>,
			default: "400",
		},
		//对齐方式
		align: {
			type: String as PropType<"left" | "center" | "right">,
			default: "left",
		},
		//文本的修饰
		decoration: {
			type: String as PropType<"none" | "underline">,
			default: "none",
		},
		//拨打电话
		call: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		//复制成功信息
		copySuccess: {
			type: String as PropType<string>,
			default: "复制成功",
		},
		//复制失败信息
		copyFail: {
			type: String as PropType<string>,
			default: "复制失败",
		}
	});
	const emit = defineEmits(['click'])
	const {
		type,
		mode,
		text,
		size,
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
	const fontSize = computed(() => uni.$sakura.utils.getVal(size.value))
	const styleName = computed(() => ({
		fontSize: fontSize.value,
		color: color.value,
		fontWeight: fontWeight.value as any,
		textAlign: align.value,
		textDecoration: decoration.value,
	}));
	const className = computed(() => ({
		[`sakura-text--${type.value}`]: type.value && true,
		[`sakura-text--block`]: block.value,
		[`sakura-text--vars`]: true
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
	@import "./sarkura-text.scss";

</style>
