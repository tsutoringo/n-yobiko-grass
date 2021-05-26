<template>
	<div id="app" class="theme-white">
		<grass-graph />
		<learning-timeline />
	</div>
</template>

<script>
import GrassGraph from '../components/GrassGraph';
import learningTimeline from '../components/LearningTimeline';

export default {
	name: 'App',
	components: { GrassGraph, learningTimeline }
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
