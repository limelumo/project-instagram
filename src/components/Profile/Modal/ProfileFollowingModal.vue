<template>
	<transition name="profileFollowingModal" appear>
		<div class="modal">
			<div class="profile-following-container">
				<header>
					<div class="profile-following-space"></div>
					<p>팔로잉</p>
					<div class="profile-following-closeBtn">
						<button type="button" @click="closeFollowingModal">
							<i class="fas fa-times"></i>
						</button>
					</div>
				</header>

				<main class="profile-following-list-container">
					<ul v-for="(friend, i) in followingLists" :key="i" class="profile-following-list">
						<li class="profile-following-list-avatar">
							<img :src="friend.avatar" />
						</li>
						<li class="profile-following-list-name">{{ friend.id }}</li>
					</ul>
				</main>
			</div>
		</div>
	</transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	name: 'ProfileFollowingModal',
	computed: {
		...mapState('profile', ['followingLists']),
	},
	methods: {
		...mapMutations('profile', ['CONTROL_FOLLOWINGMODAL']),
		closeFollowingModal() {
			this.CONTROL_FOLLOWINGMODAL(false);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Profile/modal/ProfileFollowingModal.scss';
</style>
