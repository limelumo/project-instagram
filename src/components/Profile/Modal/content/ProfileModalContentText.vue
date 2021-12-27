<template>
	<section>
		<div class="modal-content-body-avatar">
			<img src="@/assets/profile.png" />
		</div>

		<div class="modal-content-body-text">
			<span>{{ name }}</span>
			<span>{{ profilePosts[postNum].content }}</span>
			<span>{{ getDate }}</span>
		</div>
	</section>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'ProfileModalContentText',
	computed: {
		...mapState('profile', ['postNum']),
		...mapState(['profilePosts', 'name', 'options']),
		getDate() {
			return this.profilePosts[this.postNum].date.toDate().toLocaleDateString('ko-KR', this.options);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Profile/modal/ProfileModalContentText.scss';
</style>
