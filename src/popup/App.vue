<template>
	<div id="app" class="theme-white">
		<grass-graph />
	</div>
</template>

<script>
import GrassGraph from '../components/GrassGraph';
// import moment from 'moment';

export default {
	name: 'App',
	components: { GrassGraph },
	data: () => ({
		days: 0
	}),
	created () {
		this.days = 0;
	},
	mounted () {
		
	}
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
