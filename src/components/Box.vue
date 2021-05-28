<template>
	<div class="box">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: 'box'
}
</script>
<style scoped>
.box {
	border: 1px solid var(--color-border-primary);
	border-radius: 6px;
	padding: 8px 0;
	margin-bottom: 20px;
}
</style>