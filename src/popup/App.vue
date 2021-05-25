<template>
	<div id="app">
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
<style>
body {
	margin: 10px;
}
html {
	width: auto;
}
</style>
