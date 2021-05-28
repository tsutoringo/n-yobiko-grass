<template>
	<div class="home">
		<h2 class="f4 text-normal">1350 progress in the last year</h2>
		<box>
			<grass-graph />
		</box>

		<h2 class="f4 text-normal">Learning activity</h2>
		<learning-timeline />
	</div>
</template>
<script>
import Box from '../../components/Box';
import GrassGraph from '../../components/GrassGraph';
import learningTimeline from '../../components/LearningTimeline';

export default {
	name: 'Home',
	components: { GrassGraph, learningTimeline, Box }
}
</script>
<style scoped>
.home>h2 {
	margin-bottom: 8px;
}
</style>