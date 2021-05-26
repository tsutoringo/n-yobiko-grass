<template>
	<div class="progress">
		<span class="progress-item" :class="[`level-${level}`]" :style="{width: width+'%'}"></span>
	</div>
</template>
<script>
export default {
	name: 'Progress',
	props: {
		max: {
			type: Number,
			required: true
		},
		val: {
			type: Number,
			required: true
		}
	},
	computed: {
		level () {
			return Math.ceil(this.val / this.max * 4);
		},
		width () {
			return this.val / this.max * 100;
		}
	}
}
</script>
<style scoped>
.progress {
	background-color: var(--color-bg-primary);
	height: 8px;
	border-radius: 4px;
	width: 100%;
	overflow: hidden;
}

.progress-item {
	display: block;
	border-radius: 4px;
	height: 100%;
}
</style>