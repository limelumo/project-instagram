<template>
	<article class="profile-container">
		<div id="profile">
			<header class="profile-header">
				<span class="profile-avatar">
					<img src="@/assets/profile.png" alt="profile-img" />
				</span>

				<span class="profile-info">
					<p class="profile-info-user">{{ name }}</p>
					<ul class="profile-info-nums">
						<li>
							게시물 <b>{{ matchedPosts.length }}</b>
						</li>
						<li>팔로워 <b>96</b></li>
						<li>팔로우 <b>70</b></li>
					</ul>
				</span>
			</header>

			<section class="profile-imgs-container">
				<ProfilePosts v-if="matchedPosts.length" />
			</section>
		</div>
	</article>
</template>

<script>
import ProfilePosts from './ProfilePosts.vue';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
	name: 'Profile',
	components: {
		ProfilePosts,
	},
	computed: {
		...mapState(['name', 'profilePosts']),
		...mapGetters({ matchedPosts: 'GET_MATCHEDUSER' }),
	},
	created() {
		this.GET_POSTDATA();
		this.GET_USERNAME();
	},
	methods: {
		...mapActions(['GET_POSTDATA', 'GET_USERNAME']),
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Profile/Profile.scss';
</style>
