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
	margin: 2px;
	
	border: 1px solid #1b1f230f;
	display: inline-block;
	border-radius: 1px;
}

.grass.level-0 {
	background-color: #ebedf0;}

.grass.level-1 {
	background-color: #9be9a8;}

.grass.level-2 {
	background-color: #40c463;}

.grass.level-3 {
	background-color: #30a14e;}

.grass.level-4 {
	background-color: #216e39;}
</style>