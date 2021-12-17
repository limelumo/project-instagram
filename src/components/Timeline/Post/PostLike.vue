<template>
	<!-- 좋아요 -->
	<div class="post-like">
		<ul class="post-like-icons">
			<li><i class="far fa-heart"></i></li>
			<!-- <li><i class="fas fa-heart"></i></li> -->
			<li><i class="far fa-comment"></i></li>
		</ul>
		<p>좋아요 10개</p>
	</div>
</template>

<script>
export default {
	name: 'PostLike',
};
</script>

<style lang="scss" scoped>
@import '@/style/Post.scss';
</style>
