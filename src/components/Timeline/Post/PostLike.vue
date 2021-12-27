<template>
	<div class="post-like">
		<ul class="post-like-icons">
			<!-- 좋아요 -->
			<li v-if="post.liked" @click="isLikeClicked">
				<i class="fas fa-heart"></i>
			</li>
			<li v-else @click="isLikeClicked">
				<i class="far fa-heart"></i>
			</li>

			<!-- 댓글 -->
			<li class="post-like-icons-comment">
				<i class="far fa-comment"></i>
			</li>
		</ul>

		<p class="post-count">좋아요 {{ post.likes }}개</p>
	</div>
</template>

<script>
import PostLikeMixin from '@/mixins/PostLikeMixin.js';

export default {
	name: 'PostLike',
	mixins: [PostLikeMixin],
	props: {
		post: Object,
		i: Number,
	},
};
</script>

<style lang="scss" scoped>
.post-like {
	padding: 8px 16px;

	&-icons {
		@include flex('', '', '');
		margin-bottom: 12px;

		&-comment {
			transform: rotateY(180deg);
		}

		li {
			@include object(24px, 24px, '');
			margin-right: 8px;

			i {
				font-size: 24px;
			}
		}
	}
}
.post-count {
	font-weight: bold;
}
</style>
