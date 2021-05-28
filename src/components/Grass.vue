<template>
	<span class="grass" :class="[`level-${level}`]" :data-level="level"></span>
</template>
<script>
export default {
	name: 'grass',
	props: {
		level: {
			type: Number,
			default: 4
		}
	},
	mounted () {
	}
}
</script>
<style scoped>
.grass {
	width: 10px;
	height: 10px;
	box-sizing: border-box;
	margin: 1.5px;
	
	border: 1px solid var(--color-calendar-graph-day-border);
	display: inline-block;
	border-radius: 1px;
}
</style>