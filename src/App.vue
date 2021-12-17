<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import router from './router/index.js';

export default {
	name: 'App',
	router,
};
</script>

<style lang="scss">
#app {
	@include object(100%, 100vh, '');
	@include flex(center, center, column);
}
</style>
