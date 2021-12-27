<template>
	<article id="sidebar">
		<User />

		<section>
			<ul class="user-suggestion-header">
				<li>회원님을 위한 추천</li>
				<li v-show="showFullList == false" @click="showAllSuggestion">모두 보기</li>
				<li v-show="showFullList == true" @click="showAllSuggestion">접기</li>
			</ul>

			<div class="user-suggestion-container" :class="{ all: showFullList }">
				<UserSuggestion v-for="(user, i) in userSuggestions" :key="i" :user="user" :i="i" />
			</div>
		</section>
	</article>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import User from './User.vue';
import UserSuggestion from './UserSuggestion.vue';

export default {
	name: 'Sidebar',
	components: {
		User,
		UserSuggestion,
	},
	computed: {
		...mapState('sidebar', ['userSuggestions']),
	},
	data() {
		return {
			showFullList: false,
		};
	},
	created() {
		this.GET_SUGGESTIONDATA();
	},
	methods: {
		...mapActions('sidebar', ['GET_SUGGESTIONDATA']),
		showAllSuggestion() {
			this.showFullList = !this.showFullList;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Sidebar/UserSuggestion.scss';

#sidebar {
	@include object(100%, auto, '');
	max-width: 293px;
	float: right;
	// position: fixed;
	// top: 60px;
	// right: 15%;
	// margin-top: 30px;
}
</style>
