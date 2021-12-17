<template>
	<article class="timeline-container">
		<div id="timeline">
			<section class="timeline-left">
				<Storys />
				<Post />
			</section>
			<Sidebar />
		</div>
	</article>
</template>

<script>
import Storys from './Storys/Storys.vue';
import Post from './Post/Post.vue';
import Sidebar from './Sidebar/Sidebar.vue';

export default {
	name: 'Timeline',
	components: {
		Storys,
		Post,
		Sidebar,
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Timeline.scss';
</style>
