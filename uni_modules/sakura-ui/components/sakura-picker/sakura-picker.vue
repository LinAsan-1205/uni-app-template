<template>
	<sakura-popup ref="popupRef" background="transparent" :closeOnClickOverlay="closeOnClickOverlay" position="bottom"
		:duration="400" width="750rpx" :show="modelValue" @close="onPopUpClose">
		<view :class="classes(n(),n('--var'))" @click.stop :style="stylesName">
			<view :class="n('--toolbar')" v-if="showToolbar">
				<view :class="n('--toolbar--cancel')" :style="{color:cancelTextColor}" @click="onCancel"
					v-if="cancelText">{{cancelText}}</view>
				<view :class="n('--toolbar--title')" v-if="title">{{title}}</view>
				<view :class="n('--toolbar--confirm')" :style="{color:confirmTextColor}" @click="onConfirm"
					v-if="confirmText">{{confirmText}}</view>
			</view>
			<picker-view :class="n('--column')" :style="{height:countHeight}" :value="currentIndex"
				:indicator-style="indicatorStyle" @change="onColumnChange">
				<picker-view-column v-for="(columnsData,index) in columnsViewData" :key="index">
					<view :class="classes(n('--column--item'),[
						itemCurrentData.currentIndex[index]===childIndex,
						n('--column--active')
					])" v-for="(columnsItem,childIndex) in columnsData" :key="childIndex">
						{{getItemText(columnsItem)}}
					</view>
				</picker-view-column>
			</picker-view>
		</view>
	</sakura-popup>
</template>

<!-- #ifdef MP-WEIXIN -->
<script lang="ts">
	export default {
		options: { styleIsolation: 'shared', virtualHost: true }
	}
</script>
<!-- #endif -->
<script lang="ts" setup>
	import { computed, onMounted, reactive, ref, toRefs, watch } from 'vue'

	const emit = defineEmits(['update:modelValue', 'change', 'confirm', 'close'])
	const props = defineProps({
		modelValue: {
			type: Boolean,
			default: false
		},
		columns: {
			type: Array,
			default: () => {
				return []
			}
		},
		labelName: {
			type: String,
			default: 'text'
		},
		showToolbar: {
			type: Boolean,
			default: true
		},
		itemHeight: {
			type: Number,
			default: 100
		},
		title: {
			type: String,
			default: null
		},
		confirmText: {
			type: String,
			default: '确认'
		},
		confirmTextColor: {
			type: String,
			default: null
		},
		cancelText: {
			type: String,
			default: '取消'
		},
		cancelTextColor: {
			type: String,
			default: null
		},
		defaultIndex: {
			type: Array,
			default: () => {
				return []
			}
		},
		closeOnClickOverlay: {
			type: Boolean,
			default: true
		},
		visibleItemCount: {
			type: Number,
			default: 5
		},
		roundSize: {
			type: Number,
			default: 0
		}
	})
	const { modelValue, columns, showToolbar, labelName, itemHeight, title, confirmText, confirmTextColor, cancelTextColor, cancelText, defaultIndex, closeOnClickOverlay, visibleItemCount, roundSize } = toRefs(props)

	const { n, classes } = uni.$sakura.utils.createNamespace('picker')

	const popupRef = ref()

	const itemCurrentData = reactive({
		currentIndex: [],
		currentItem: [],
		columns: columns.value,
		columnsIndex: 0
	})

	const lastIndex = ref({})

	const currentIndex = ref(defaultIndex.value)

	const columnsViewData = ref(columns.value)

	const stylesName = computed(() => ({
		borderRadius: `${uni.$sakura.utils.getVal(roundSize.value || 0)} ${uni.$sakura.utils.getVal(roundSize.value || 0)} 0 0`
	}))

	const indicatorStyle = computed(() => `height:${uni.$sakura.utils.getVal(itemHeight.value)};`)

	const countHeight = computed(() => uni.$sakura.utils.getVal(visibleItemCount.value * itemHeight.value))

	watch(() => columns.value, () => {
		columnsViewData.value = columns.value
		//初始化选中
		initCurrentIndex()
	}, {
		deep: true
	})
	const setColumnValues = (index : number, data : any[]) => {
		//删除大于当前列的数据 如果有的话
		columnsViewData.value.forEach((_, i) => {
			if (itemCurrentData.columnsIndex < i) {
				columnsViewData.value.splice(i, 1)
			}
		})
		columnsViewData.value[index] = data
	}
	//设置当前选中的index
	const setItemCurrentData = (data : number[]) => {
		currentIndex.value = data
		itemCurrentData.currentIndex = data
		const currentItem = []
		data.forEach((current : number, index : number) => {
			currentItem.push(columns.value[index][current])
		})
		itemCurrentData.currentItem = currentItem
	}
	const initCurrentIndex = () => {
		if (defaultIndex.value.length === 0) {
			setItemCurrentData(Array.from({ length: columnsViewData.value.length }, () => 0))
			return
		}
		setItemCurrentData(defaultIndex.value as number[])
	}

	const getItemText = (val : any) => {
		if (uni.$sakura.utils.object(val)) {
			return val[labelName.value]
		}
		return val
	}

	const onColumnChange = (e : any) => {
		const {
			value
		} = e.detail
		value.forEach((item : number, index : number) => {
			if (lastIndex.value[index] !== item) {
				lastIndex.value[index] = item
				itemCurrentData.columnsIndex = index
			}
		})
		setItemCurrentData(value)
		emit('change', itemCurrentData)
	}

	const onConfirm = () => {
		//如果没有拖动并且没有默认索引
		if (itemCurrentData.currentIndex.length === 0 && defaultIndex.value.length === 0) {
			setItemCurrentData(Array.from({ length: columnsViewData.value.length }, () => 0))
		}
		//没有拖动并且有默认索引切长度必须要和列长度相等
		if (itemCurrentData.currentIndex.length === 0 && defaultIndex.value.length === columnsViewData.value.length) {
			setItemCurrentData(defaultIndex.value as number[])
		}
		popupRef.value.close()
		emit('update:modelValue', false)
		emit('close')
		emit('confirm', itemCurrentData)
	}
	const onCancel = () => {
		popupRef.value.close()
		itemCurrentData.currentIndex = []
		itemCurrentData.currentItem = []
		emit('close')
		emit('update:modelValue', false)
	}
	const onPopUpClose = () => {
		emit('close')
		emit('update:modelValue', false)
	}

	onMounted(() => {
		//初始化选中
		initCurrentIndex()
	})

	defineExpose({
		setColumnValues
	})
</script>

<style lang="scss">
	@import './sakura-picker.scss';

</style>
