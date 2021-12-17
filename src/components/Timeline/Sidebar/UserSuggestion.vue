<template>
	<section id="user-suggestion">
		<div class="user-suggestion-list">
			<ul class="user-suggestion-list-id">
				<li>
					<img src="@/assets/logo.png" alt="" />
				</li>
				<li>username</li>
			</ul>

			<!-- 팔로우 버튼 -->
			<button class="user-suggestion-list-follow">팔로우</button>
		</div>
	</section>
</template>

<script>
export default {
	name: 'UserSuggestion',
};
</script>

<style lang="scss" scoped>
@import '@/style/UserSuggestion.scss';
</style>
