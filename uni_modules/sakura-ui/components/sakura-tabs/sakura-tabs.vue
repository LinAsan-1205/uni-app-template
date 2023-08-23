<template>
	<view :class="className">
		<scroll-view :scroll-x="scrollable" :scroll-with-animation="animation">
			<view :class="n('--list')">
				<view :class="classes(n('--list--item'),[item.value==modelValue,n('--list--active')])"
					v-for="(item,index) in list" :key="index" @click="onClick(item,index)">
					<view :id="'tabs-'+index" :class="n('--list--item--content')">
						<sakura-icon v-if="item.icon&&item.icon.name" v-bind="item.icon"></sakura-icon>
						<text :class="classes([item.icon&&item.icon.name,n('--list-item-icon')])">
							{{item.label}}
						</text>
					</view>
				</view>
			</view>
			<view :class="n('--line')" :style="lineStyles"></view>
		</scroll-view>
	</view>
</template>

<script lang="ts" setup>
	import { computed, getCurrentInstance, onMounted, reactive, toRefs, watch } from "vue";
	const emit = defineEmits(['update:modelValue', 'change'])
	const props = defineProps({
		modelValue: {
			type: [String, Number],
			default: ''
		},
		//列表
		list: {
			type: Array,
			default: () => []
		},
		//线条高度
		lineHeight: {
			type: [String, Number],
			default: '3px'
		},
		lineWidth: {
			type: [String, Number],
			default: null
		},
		//动画
		animation: {
			type: Boolean,
			default: true
		},

		//动画过渡时间
		duration: {
			type: String,
			default: '300ms'
		},

		//是否可以滚动
		scrollable: {
			type: Boolean,
			default: false
		},
	})

	const { modelValue, list, lineHeight, lineWidth, scrollable, animation, duration } = toRefs(props)

	const { n, classes } = uni.$sakura.utils.createNamespace('tabs')

	const instance = getCurrentInstance()

	const { screenHeight, safeArea, platform } = uni.getSystemInfoSync()

	const className = computed(() => classes([n(), n('--var')]))

	const line = reactive({
		left: 0,
		width: 0,
		transition: null
	})

	const lineStyles = computed(() => {
		// const isIos = platform === 'ios' ? uni.upx2px(screenHeight - safeArea.bottom) : 0
		return {
			left: line.left + 'px',
			height: uni.$sakura.utils.getVal(lineHeight.value),
			width: lineWidth.value ? uni.$sakura.utils.getVal(lineWidth.value) : line.width + 'px',
			// top: `calc(50% - ${isIos}px)`,
			// transform: ` translateY(-calc(50% - ${isIos}px))`,
			transition: line.transition
		}
	})


	const onUpdateLineHeight = () => {
		const query = uni.createSelectorQuery().in(instance);
		const index = list.value.findIndex(item => item.value == modelValue.value)
		query.select(`#tabs-${index}`).boundingClientRect(data => {
			line.width = data.width
			line.left = data.left
		}).exec();
	}

	const onClick = (item, index : number) => {
		const data = {
			item,
			index
		}
		emit('update:modelValue', item.value)
		emit('change', data)
	}

	watch(() => modelValue.value, () => {
		if (!line.transition && animation.value) line.transition = `left ${duration.value},width ${duration.value}`
		onUpdateLineHeight()
	})

	onMounted(() => {
		if (list.value.length < 1) return
		onUpdateLineHeight()
	})
</script>

<style lang="scss">
	@import './sakura-tabs.scss';

</style>
