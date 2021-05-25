<template>
	<div class="timeline-badge">
		<slot />
	</div>
</template>
<script>
export default {
	name: 'TimelineBadge'
}
</script>
<style scoped>
.timeline-badge {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
	height: 32px;
	width: 32px;
	color: var(--color-icon-secondary);
	background-color: var(--color-timeline-badge-bg);
	border: 2px solid var(--color-bg-canvas);
	border-radius: 50%;
	margin-left: -15px;
	margin-right: 8px;
	box-sizing: border-box;
}
</style>