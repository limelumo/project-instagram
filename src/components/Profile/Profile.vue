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
							게시물 <b>{{ profilePosts.length }}</b>
						</li>
						<li>팔로워 <b>96</b></li>
						<li>팔로우 <b>70</b></li>
					</ul>
				</span>
			</header>

			<section class="profile-imgs-container">
				<ProfilePosts />
			</section>
		</div>
	</article>
</template>

<script>
import ProfilePosts from './ProfilePosts.vue';
import { mapState, mapActions } from 'vuex';

export default {
	name: 'Profile',
	components: {
		ProfilePosts,
	},
	computed: {
		...mapState(['name', 'profilePosts']),
	},
	created() {
		this.getPostData();
		this.getUserName();
	},
	methods: {
		...mapActions(['getPostData', 'getUserName']),
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Profile/Profile.scss';
</style>
