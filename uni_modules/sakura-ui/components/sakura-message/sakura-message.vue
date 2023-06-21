<template>
	<view :class="className">
		<sakura-transition :zIndex="1000" :duration="300" mode-class="slide-top" :show="showMessage">
			<view :class="classes(n('--wrapper'))">
				<view :style="contentStyle" :class="classes(n('--content'),[classType,n(`--${classType}`)])">
					<slot>
						{{message}}
					</slot>
				</view>
			</view>
		</sakura-transition>
	</view>
</template>

<script setup>
	import { computed, ref, watch } from 'vue'

	const { n, classes } = uni.$sakura.utils.createNamespace('message')

	const message = ref()

	const duration = ref(3000)

	const showMessage = ref(false)

	const type = ['primary', 'success', 'warning', 'error', 'info']

	const classType = ref()

	const timer = ref()

	const className = computed(() => classes(n(), n('--var')))

	const contentStyle = ref({})

	const open = (text, val) => {
		if (!val || !type.includes(val)) {
			console.error('缺少类型：', val)
			return
		}

		message.value = text

		classType.value = val

		if (showMessage.value) {
			return
		}
		showMessage.value = true
		timerOut()
	}

	const show = (config = {}) => {
		const {
			type = "primary", color = "#fff", bgColor = null, message: text, time = 3000, fontSize =
				'32rpx'
		} =
		config

		message.value = text
		duration.value = time
		contentStyle.value = {
			color,
			backgroundColor: bgColor,
			fontSize
		}
		if (showMessage.value) {
			return
		}
		if (type) {
			classType = type
		}
		showMessage.value = true
		timerOut()
	}

	const timerOut = () => {
		if (duration.value === 0) return
		clearTimeout(timer.value)
		timer.value = setTimeout(() => {
			showMessage.value = false
		}, duration.value)
	}

	const close = () => {
		showMessage.value = false
	}

	watch(() => showMessage.value, () => {
		if (showMessage.value) {
			timerOut()
		}
	})

	const typeMethods = type.reduce((a, c) => {
		a[c] = (text) => open(text, c)
		return a
	}, {})

	defineExpose({
		show,
		...typeMethods,
		close
	})

</script>

<style lang="scss">
	@import './sakura-message.scss';

</style>
