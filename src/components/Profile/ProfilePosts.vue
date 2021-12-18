<template>
	<div class="profile-imgs-items">
		<div
			class="profile-imgs-item"
			v-for="(post, i) in profilePosts"
			:key="i"
			@click="
				isClikedPost(true);
				setPostNum(i);
			"
		>
			<img :src="post.img" :class="post.filter" />

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
import { mapActions, mapMutations, mapState } from 'vuex';
import ProfileModal from './Modal/ProfileModal.vue';

export default {
	name: 'ProfilePosts',
	components: {
		ProfileModal,
	},
	computed: {
		...mapState(['imgUrl', 'filtered', 'profilePosts', 'clikedPost']),
	},
	data() {
		return {
			likedCount: 20,
			commentCount: 5,
		};
	},
	methods: {
		...mapMutations(['isClikedPost', 'setPostNum']),
		...mapActions(['getPostData']),
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Profile/ProfilePosts.scss';
</style>
