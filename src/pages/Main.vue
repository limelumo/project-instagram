<template>
	<main id="main">
		<Nav />
		<Timeline />
	</main>
</template>

<script>
import Nav from '../components/Nav/Nav.vue';
import Timeline from '../components/Timeline/Timeline.vue';

export default {
	name: 'Main',
	components: {
		Nav,
		Timeline,
	},
};
</script>

<style scoped>
#main {
	width: 100%;
}
</style>
