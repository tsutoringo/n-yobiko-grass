<template>
	<div id="app" class="theme-dark">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: { },
	created () {
		document.body.classList.add('theme-dark');
	}
}
</script>

<!-- Tooltip style -->
<style src="./tooltip.css"></style>
<style src="./theme.css"></style>
<style src="./shortcuts.css"></style>
<style>
body {
	font-size: 14px;
	margin: 10px;
	background-color: var(--main-background-color);
	color: var(--color-text-primary);
}
html {
	width: auto;
}

a {
	color: var(--color-text-link);
	text-decoration: none;
}
</style>
<style scoped>
#app {
}
</style>