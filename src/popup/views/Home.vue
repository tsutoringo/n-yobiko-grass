<template>
	<div class="home">
		<grass-graph />
		<learning-timeline />
	</div>
</template>
<script>
import GrassGraph from '../../components/GrassGraph';
import learningTimeline from '../../components/LearningTimeline';

export default {
	name: 'Home',
	components: { GrassGraph, learningTimeline }
}
</script>