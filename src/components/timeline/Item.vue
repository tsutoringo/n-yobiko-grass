<template>
	<div class="timeline-item">
		<timeline-badge><slot name="badge" /></timeline-badge>
		<timeline-body>
			<template #title>
				<slot name="title"/>
			</template>
			<template #default>
				<slot />
			</template>
		</timeline-body>
	</div>
</template>
<script>
import TimelineBadge from './Badge';
import TimelineBody from './Body';

export default {
	name: 'TimelineItem',
	components: { TimelineBadge, TimelineBody }
}
</script>

<style scoped>
.timeline-item {
	position: relative;
	display: flex;
	margin-left: 16px;
	padding: 16px 0;
	font-size: 16px;
}

.timeline-item::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 2px;
	height: 100%;
	display: block;
	background-color: var(--color-border-secondary);
}
</style>