<template>
	<div id="app" class="theme-white">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: { }
}
</script>

<!-- Tooltip style -->
<style src="./tooltip.css"></style>
<style src="./theme.css"></style>
<style src="./shortcuts.css"></style>
<style>
body {
	margin: 10px;
	background-color: var(--main-background-color);
	color: var(--color-text-primary);
	font-size: 14px;
}
html {
	width: auto;
}

a {
	color: var(--color-text-link);
	text-decoration: none;
}
</style>
