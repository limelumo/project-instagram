<template>
	<article class="timeline-container">
		<div id="timeline">
			<section class="timeline-left">
				<Storys />
				<Post v-for="(post, i) in friendPosts" :key="i" :post="post" :i="i" />
			</section>
			<Sidebar />
		</div>
	</article>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
	computed: {
		...mapState(['friendPosts']),
	},
	created() {
		this.GET_FRIENDSDATA();
	},
	methods: {
		...mapActions(['GET_FRIENDSDATA']),
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Timeline/Timeline.scss';
</style>
