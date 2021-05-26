<template>
	<timeline>
		<template #title>
			May <span>2021</span>
		</template>
		<template #default>
			<timeline-item>
				<template #badge><octicon :icon="check"/></template>
				<template #title>終わらせた</template>
				<template #default>
					
				</template>
			</timeline-item>
			<timeline-item>
				<template #badge>a</template>
				<template #title>はじめた動画</template>
			</timeline-item>
			<timeline-item>
				<template #badge></template>
				<template #title>終わらせたテスト</template>
			</timeline-item>
		</template>
	</timeline>
</template>
<script>
import Timeline from './timeline/Timeline';
import TimelineItem from './timeline/Item';
import { check } from 'octicons-vue';

export default {
	name: 'learningTimeline',
	components: { Timeline, TimelineItem },
	props: {
		date: {

		}
	},
	data: () => ({
		check
	})
}
</script>