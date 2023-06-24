<template>
	<view :class="className" @click="onCell">
		<slot name="icon">
			<view :class="classes(n('--icon'))" v-if="leftIcon">
				<sakura-icon :name="leftIcon"></sakura-icon>
			</view>
		</slot>
		<view :class="classes(n('--content'))">
			<slot>
				<view :class="classes(n('--title'))" v-if="title">
					{{title}}
				</view>
			</slot>
			<slot name="description">
				<view :class="classes(n('--description'))" v-if="description">
					{{description}}
				</view>
			</slot>
		</view>
		<view :class="classes(n('--right'))">
			<slot name="right">
				<slot name="value">
					<text :class="classes(n('--value'))" v-if="value">{{value}}</text>
				</slot>
				<sakura-icon :name="rightIcon" v-if="props.rightIcon||arrow" @click.stop="onRightIcon"></sakura-icon>
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
<script lang="ts" setup>
	import { computed, toRefs } from "vue";

	const emit = defineEmits(['click', 'rightIcon'])

	const props = defineProps({

		//单元格标题	
		title: {
			type: String,
		},
		//描述信息	
		description: {
			type: String,
		},

		//右侧的内容
		value: {
			type: String,
		},

		//是否显示下边框	
		border: {
			type: Boolean,
			default: true
		},
		//左侧icon
		leftIcon: {
			type: String,
		},
		//整体垂直居中
		center: {
			type: Boolean,
			default: true
		},
		//是否展示右侧箭头
		arrow: {
			type: Boolean,
			default: false
		},
		//右侧icon
		rightIcon: {
			type: String,
		},
		//右侧icon 点击事件
		rightIconClick: {
			type: Boolean,
			default: false
		},
		isLink: {
			type: Boolean,
			default: false
		},
		//
		url: {
			type: String,
		},
		borderFull: {
			type: Boolean,
			default: false
		}
	})

	const { title, description, value, border, leftIcon, center, arrow, rightIconClick, isLink, url, borderFull } = toRefs(props)

	const { n, classes } = uni.$sakura.utils.createNamespace('cell')

	const className = computed(() => classes(n(), n('--var'), [border.value, n('--border')], [center.value, n('--center')],
		[borderFull.value, n('--border--full')]
	))

	const rightIcon = computed(() => {
		if (arrow.value) {
			return 'arrow-right';
		}
		return props.rightIcon
	})

	const onCell = () => {
		if (isLink.value && url.value) {
			uni.navigateTo({
				url: url.value
			})
			return
		}
		emit('click')
	}
	const onRightIcon = () => {

		if (rightIconClick.value) {
			emit('rightIcon')
			return
		}
		onCell()
	}
</script>

<style lang="scss">
	@import '../sakura-cell-group/sakura-cell-group.scss';
	@import './sakura-cell.scss';

</style>
