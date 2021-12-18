<template>
	<section id="storys">
		<Story v-for="(data, i) in 8" :key="i" />
	</section>
</template>

<script>
import Story from './Story.vue';

export default {
	name: 'Storys',
	components: {
		Story,
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Story/Storys.scss';
</style>
