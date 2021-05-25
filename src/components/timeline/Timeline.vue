<template>
	<div class="timeline">
		<h3>
			<div>
				<slot name="title"/>
			</div>
		</h3>
		<slot />
	</div>
</template>
<script>
export default {
	name: 'TimelineList'
}
</script>
<style scoped>
.timeline>h3 {
	font-weight: 600;
	font-size: 12px;
	position: relative;
	display: flex;
	align-items: center;
}

.timeline>h3>div {
	background-color: var(--main-bg-color);
	padding-right: 16px;
	padding-left: 8px;
	display: flex;
	z-index: 1;
}

.timeline>h3>div>span {
	margin-left: 8px;
	color: var(--color-text-secondary);
}

.timeline>h3::before {
	content: "";
	position: absolute;
	display: block;
	width: 100%;
	height: 1px;

	background-color: var(--color-border-primary);
}
</style>
