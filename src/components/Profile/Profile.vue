<template>
	<article class="profile-container">
		<div id="profile">
			<header class="profile-header">
				<span class="profile-avatar">
					<img src="@/assets/flitto.png" alt="profile-img" />
				</span>

				<span class="profile-info">
					<p class="profile-info-user">{{ name }}</p>
					<ul class="profile-info-nums">
						<li>
							게시물 <b>{{ imgCount }}</b>
						</li>
						<li>팔로워 <b>96</b></li>
						<li>팔로우 <b>70</b></li>
					</ul>
				</span>
			</header>

			<section class="profile-imgs-container">
				<ProfileImgs />
			</section>
		</div>
	</article>
</template>

<script>
import ProfileImgs from './ProfileImgs.vue';
import firebase from 'firebase/compat/app';
import { mapState } from 'vuex';

export default {
	name: 'Profile',
	components: {
		ProfileImgs,
	},
	data() {
		return {
			imgCount: 34,
		};
	},
	computed: {
		...mapState(['name']),
	},

	created() {
		const user = firebase.auth().currentUser.displayName;
		return this.$store.commit('setUserName', user);
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Profile.scss';
</style>
