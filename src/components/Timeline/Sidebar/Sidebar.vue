<template>
	<article id="sidebar">
		<User />

		<section>
			<p class="user-suggestion-header">회원님을 위한 추천</p>
			<UserSuggestion v-for="i in 5" :key="i" />
		</section>
	</article>
</template>

<script>
import User from './User.vue';
import UserSuggestion from './UserSuggestion.vue';

export default {
	name: 'Sidebar',
	components: {
		User,
		UserSuggestion,
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Sidebar/Sidebar.scss';
@import '@/style/Sidebar/UserSuggestion.scss';
</style>
