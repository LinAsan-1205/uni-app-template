<template>
	<sakura-picker @close="onClose" :title="title" :modelValue="modelValue" :columns="columns"
		:defaultIndex="defaultIndex"></sakura-picker>
</template>

<script lang="ts" setup>
	import { ref, onMounted, toRefs } from 'vue'
	import dayjs from '../../libs/utils/dayjs.js'

	const emit = defineEmits(['update:modelValue', 'close'])

	const props = defineProps({
		modelValue: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: 'date'
		},
		title: {
			type: String,
			default: null
		},
		minDate: {
			type: Number,
			default: null
		},
		maxDate: {
			type: Number,
			default: null
		}
	})
	const { modelValue, type, title, minDate, maxDate } = toRefs(props)

	const date = new Date()

	const columns = ref([])

	const defaultIndex = ref([])

	//最小时间
	const min = !minDate.value ? dayjs(date.getTime()).subtract(10, 'y') : dayjs(minDate.value)
	//最大时间
	const max = !maxDate.value ? dayjs(date.getTime()).add(10, 'y') : dayjs(maxDate.value)

	const getYears = () => {
		const years = []
		for (let i = +min.format('YYYY'); i <= +max.format('YYYY'); i++) {
			years.push({
				text: i + '年',
				value: i
			})
		}
		return years
	}

	const getMonths = () => {
		const months = []
		for (let i = 1; i <= 12; i++) {
			months.push({
				text: i + '月',
				value: i
			})
		}
		return months
	}

	const getDays = () => {
		const days = []
		for (let i = 1; i <= 31; i++) {
			days.push({
				text: i + '日',
				value: i
			})
		}
		return days
	}

	const initValue = () => {
		//年月日
		if (type.value === 'date') {
			columns.value = [getYears(), getMonths(), getDays()]
		}
	}

	const onClose = () => {
		emit('close')
		emit('update:modelValue', false)
	}

	onMounted(() => {
		initValue()
	})
</script>

<style lang="scss">
	@import './sakura-date-time.scss';

</style>
