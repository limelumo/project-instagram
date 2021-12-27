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
			<button type="button" class="user-suggestion-list-follow" @click="followThisUser">팔로우</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UserSuggestion',
	props: {
		user: Object,
		i: Number,
	},
	methods: {
		followThisUser() {
			alert('준비중');
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Sidebar/UserSuggestion.scss';
</style>
