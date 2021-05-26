<template>
	<div class="timeline-body">
		<details>
			<summary>
				<span class="title"><slot name="title" /></span>
				<span class="icon close"><octicon :icon="unfold" /></span>
				<span class="icon open"><octicon :icon="fold" /></span>
			</summary>
			<div>
				<slot />
			</div>
		</details>
	</div>
</template>
<script>
import { unfold, fold } from 'octicons-vue';

export default {
	name: 'TimelineBody',
	data: () => ({
		unfold,
		fold
	})
}
</script>
<style scoped>
.timeline-body {
	margin-top: 4px;
	width: 100%;
}
.timeline-body>details>summary {
	list-style: none;
	display: flex;
	cursor: pointer;
	width: 100%;
}
.timeline-body>details>summary>.title {
	margin-right: auto;
}
.timeline-body>details>summary:hover>.title {
	color: var(--color-text-link);
}

.timeline-body>details>summary>.icon.open {
	display: none;
}

.timeline-body>details[open]>summary>.icon.open {
	display: inline;
}

.timeline-body>details[open]>summary>.icon.close {
	display: none;
}
</style>
