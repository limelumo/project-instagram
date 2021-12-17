<template>
	<section id="post">
		<PostHeader />

		<main>
			<img src="@/assets/logo.png" />
		</main>

		<footer class="post-footer-container">
			<PostLike />

			<!-- 피드내용 -->
			<div class="post-footer-feed">
				<span class="post-footer-username">username</span>
				<span class="post-footer-text">오늘은 월요일 </span>
			</div>

			<!-- 댓글 -->
			<ul class="post-footer-comment">
				<li>
					<span class="post-footer-username">friend1</span>
					<span class="post-footer-text"> 출근 잘 했나요 </span>
				</li>
				<li><i class="far fa-heart"></i></li>
			</ul>
		</footer>
	</section>
</template>

<script>
import PostHeader from './PostHeader.vue';
import PostLike from './PostLike.vue';

export default {
	name: 'Post',
	components: {
		PostHeader,
		PostLike,
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Post.scss';
</style>
