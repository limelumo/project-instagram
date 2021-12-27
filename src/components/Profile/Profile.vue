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
						<li @click="showFollowingModal">
							팔로우 <b>{{ Object.keys(followingLists).length }}</b>
						</li>
					</ul>
					<ProfileFollowingModal v-if="isFollowingModalOpen" />
				</span>
			</header>

			<section class="profile-imgs-container">
				<ProfilePosts v-if="matchedPosts.length" />
			</section>
		</div>
	</article>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import ProfilePosts from './ProfilePosts.vue';
import ProfileFollowingModal from './Modal/ProfileFollowingModal.vue';

export default {
	name: 'Profile',
	components: {
		ProfilePosts,
		ProfileFollowingModal,
	},
	computed: {
		...mapState('profile', ['followingLists', 'isFollowingModalOpen']),
		...mapState(['friendPosts', 'name']),
		...mapGetters({ matchedPosts: 'getMatchedUser' }),
	},
	created() {
		this.GET_FRIENDSDATA();
		this.GET_USERNAME();
		this.GET_FOLLOWINGDATA();
	},
	methods: {
		...mapActions('profile', ['GET_FOLLOWINGDATA']),
		...mapActions(['GET_FRIENDSDATA', 'GET_USERNAME']),
		...mapActions(['GET_USERNAME']),
		...mapMutations('profile', ['CONTROL_FOLLOWINGMODAL']),

		showFollowingModal() {
			this.CONTROL_FOLLOWINGMODAL(true);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Profile/Profile.scss';
</style>
