<template>
	<div id="user-suggestion">
		<div class="user-suggestion-list">
			<ul class="user-suggestion-list-id">
				<li>
					<img :src="user.avatar" />
				</li>
				<li>{{ user.id }}</li>
			</ul>

			<!-- 팔로우 버튼 -->
			<button type="button" class="user-suggestion-list-follow" :class="{ followed: followingClicked }" @click="followThisUser">
				팔로우
			</button>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export default {
	name: 'UserSuggestion',
	props: {
		user: Object,
		i: Number,
	},
	data() {
		return {
			followingClicked: false,
		};
	},
	methods: {
		...mapActions('profile', ['GET_FOLLOWINGDATA']),
		...mapMutations('profile', ['CONTROL_FOLLOWINGMODAL']),

		followThisUser() {
			this.toSave = {
				id: this.user.id,
				avatar: this.user.avatar,
			};

			firebase
				.firestore()
				.collection('following')
				.add(this.toSave)
				.then(this.CONTROL_FOLLOWINGMODAL(false))
				.then(this.GET_FOLLOWINGDATA)
				.catch((error) => {
					console.log(error);
				});

			this.followingClicked = !this.followingClicked;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Sidebar/UserSuggestion.scss';
</style>
