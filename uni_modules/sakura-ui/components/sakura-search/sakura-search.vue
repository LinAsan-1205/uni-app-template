<template>
	<view class="sakura-search">
		<view class="sakura-search--box" @click="handleClick" :style="searchStyle">
			<view class="sakura-search--box--icon" @click.stop="handleClickIcon">
				<slot name="searchIcon"><sakura-icon :color="searchIconColor" :size="searchIconSize"
						:name="searchIcon" />
				</slot>
			</view>
			<input :value="searchVal" :placeholder="placeholder" type="text" confirm-type="search"
				:maxlength="maxlength" :disabled="disabled" :align="inputAlign" :focus="showSync"
				class="sakura-search--input" @input="handleInput" @confirm="handleConfirm" @blur="handleBlur"
				@focus="handleFocus" :placeholder-style="`color:${placeholderColor}`" :style="inputStyle" />
			<view v-if="showClear" class="sakura-search--icon--clear" @click="handleClear">
				<slot name="clearIcon"><sakura-icon color="#c0c4cc" size="20" name="clear1" /></slot>
			</view>
		</view>
		<view class="sakura-search--action" v-if="showAction" @click="handleAction">
			<slot name="action">
				<text>{{ actionText }}</text>
			</slot>
		</view>
	</view>
</template>
<!-- #ifdef MP-WEIXIN -->
<script lang="ts">
	export default {
		options: { virtualHost: true }
	}
</script>
<!-- #endif -->
<script setup lang="ts">
	import { computed, toRefs, watch, ref, nextTick } from 'vue'
	const props = defineProps({
		//占位符
		placeholder: {
			type: String,
			default: ""
		},
		//背景颜色
		bgColor: {
			type: String,
			default: '#F8F8F8'
		},
		//圆角
		radius: {
			type: [Number, String],
			default: 5
		},
		//输入框最大长度
		maxlength: {
			type: [Number, String],
			default: '-1'
		},

		modelValue: {
			type: [Number, String],
			default: ""
		},
		//是否显示清除图标
		showClearIcon: {
			type: Boolean,
			default: true
		},
		//是否显示右侧
		showAction: {
			type: Boolean,
			default: false
		},
		//右侧文字
		actionText: {
			type: String,
			default: '搜索'
		},
		//禁用
		disabled: {
			type: Boolean,
			default: false
		},
		//左侧图标
		searchIcon: {
			type: String,
			default: 'search'
		},
		//左侧图标大小
		searchIconSize: {
			type: [Number, String],
			default: 18
		},
		//左侧图标颜色
		searchIconColor: {
			type: String,
			default: '#c0c4cc'
		},
		//输入框对齐方式
		inputAlign: {
			type: String,
			default: 'left'
		},
		//焦点
		focus: {
			type: Boolean,
			default: true
		},
		//输入框颜色
		color: {
			type: String,
			default: '#606266'
		},
		//输入框占位符颜色
		placeholderColor: {
			type: String,
			default: '#CCCCCC'
		},
		//高度
		height: {
			type: [Number, String],
			default: '36px'
		}
	})
	const emit = defineEmits(['update:modelValue', 'clear', 'change', 'confirm', 'blur', 'focus', 'action', 'click', 'clickIcon'])
	const {
		placeholder,
		bgColor,
		radius,
		maxlength,
		modelValue,
		showClearIcon,
		showAction,
		actionText,
		disabled,
		searchIcon,
		searchIconSize,
		searchIconColor,
		focus,
		placeholderColor,
		color,
		height
	} = toRefs(props)
	const searchVal = ref('')
	const show = ref(false)
	const showSync = ref(false)

	const inputStyle = computed(() => ({
		color
	}))
	const searchStyle = computed(() => ({
		height: uni.$sakura.utils.getVal(height.value),
		borderRadius: radius.value + 'px',
		backgroundColor: bgColor.value
	}))
	const showClear = computed(() => show.value && showClearIcon.value && !disabled.value && searchVal.value !== '')
	watch(() => modelValue?.value, (newVal) => {
		searchVal.value = newVal
		if (newVal && showSync.value) {
			show.value = true
		}
	}, {
		immediate: true
	})

	watch(() => searchVal.value, (newVal) => {
		emit('update:modelValue', newVal)
	}, {
		immediate: true
	})

	watch(() => focus.value, (newVal) => {
		if (disabled.value) return
		show.value = true
		nextTick(() => {
			showSync.value = true
		})
	})
	const handleClick = () => {
		if (disabled.value) {
			emit('click')
			return
		}
		setTimeout(() => {
			if (!showSync.value) {
				showSync.value = true
			}
			if (!show.value) {
				show.value = true
			}
		}, 100)
	}
	const handleClear = () => {
		emit('clear', searchVal.value)
		searchVal.value = ""
		show.value = false
	}
	const handleClickIcon = () => {
		emit('clickIcon')
	}
	const handleInput = (e : CustomEvent) => {
		searchVal.value = e.detail.value
		emit('change', e.detail.value)
	}
	const handleConfirm = (e : CustomEvent) => {
		emit('confirm', e.detail.value)
		// #ifndef APP-PLUS
		uni.hideKeyboard();
		// #endif
		// #ifdef APP-PLUS
		plus.key.hideSoftKeybord()
		// #endif
	}
	const handleBlur = (e : CustomEvent) => {
		setTimeout(() => {
			showSync.value = false
		}, 100)
		show.value = false
		// #ifndef APP-PLUS
		uni.hideKeyboard();
		// #endif
		// #ifdef APP-PLUS
		plus.key.hideSoftKeybord()
		// #endif
		emit('blur', e.detail.value)
	}
	const handleFocus = (e : CustomEvent) => {
		emit('focus', e.detail.value)
	}
	const handleAction = () => {
		if (disabled.value) return
		emit('action', searchVal.value)
		// searchVal.value = ""
		// show.value = false
		// showSync.value = false
		// #ifndef APP-PLUS
		uni.hideKeyboard()
		// #endif
		// #ifdef APP-PLUS
		plus.key.hideSoftKeybord()
		// #endif
	}
</script>

<style scoped lang="scss">
	@use './sakura-search.scss';

</style>
