<template>
	<div id="app" class="theme-white">
		<grass-graph />
		<timeline>
			<template #title>
				May <span>2021</span>
			</template>
			<template #default>
				<timeline-item>
					<template #badge>a</template>
					<template #title>終わらせた動画</template>
					<template #content>にゃーんにゃーん</template>
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
	</div>
</template>

<script>
import GrassGraph from '../components/GrassGraph';
import Timeline from '../components/timeline/Timeline';
import TimelineItem from '../components/timeline/Item';

export default {
	name: 'App',
	components: { GrassGraph, Timeline, TimelineItem }
}
</script>

<!-- Tooltip style -->
<style src="./tooltip.css"></style>
<style src="./theme.css"></style>
<style>
body {
	margin: 10px;
	background-color: var(--main-background-color);
	color: var(--color-text-primary);
}
html {
	width: auto;
}
</style>
