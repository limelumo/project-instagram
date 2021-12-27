<template>
	<div class="profile-imgs-items">
		<div
			class="profile-imgs-item"
			v-for="(post, i) in matchedPosts"
			:key="i"
			@click="
				SET_CLICKEDPOST(true);
				SET_POSTNUM(i);
			"
		>
			<img v-lazy="post.img" :class="post.filter" />

			<ul class="profile-imgs-item-hover">
				<li class="profile-imgs-icon-heart">
					<i class="fas fa-heart"></i>
					{{ likedCount }}
				</li>
				<li class="profile-imgs-icon-comment">
					<i class="fas fa-comment"></i>
					{{ commentCount }}
				</li>
			</ul>
		</div>

		<ProfileModal v-if="clikedPost" />
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import ProfileModal from './Modal/ProfileModal.vue';

export default {
	name: 'ProfilePosts',
	components: {
		ProfileModal,
	},
	data() {
		return {
			likedCount: 20,
			commentCount: 5,
		};
	},
	computed: {
		...mapState('profile', ['imgUrl', 'clikedPost']),
		...mapState('nav', ['filtered']),
		...mapState(['friendPosts']),
		...mapGetters({ matchedPosts: 'getMatchedUser' }),
	},
	methods: {
		...mapMutations('profile', ['SET_CLICKEDPOST', 'SET_POSTNUM']),
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Profile/ProfilePosts.scss';
</style>
