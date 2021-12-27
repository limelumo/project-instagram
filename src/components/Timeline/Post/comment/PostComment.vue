<template>
	<!-- 댓글 개수 -->
	<div class="post-comment" :class="{ all: showAll }">
		<section class="post-comment-all" @click="showAllComments">
			<div v-if="commentLength > 2">
				<span>댓글 {{ commentLength }}개</span>
				<span v-if="showCommentLength == true">&nbsp;모두 보기</span>
			</div>
		</section>

		<!-- 댓글 -->
		<section class="post-comment-lists" v-for="(comment, num) in post.comment" :key="num">
			<div class="post-comment-username">{{ comment.id }}</div>
			<div class="post-comment-text">{{ comment.text }}</div>

			<!-- 댓글 삭제 모달 버튼 -->
			<div
				class="post-comment-options"
				@click="
					showCommentOptionModal();
					SET_POSTCOMMENTNUM(num);
					SET_POSTDOCNUM(i);
				"
			>
				<i class="fas fa-ellipsis-h"></i>
			</div>

			<!-- 좋아요 -->
			<div class="post-comment-likes">
				<i v-if="comment.liked" @click="isCommentLikeClicked(num)" class="fas fa-heart"></i>
				<i v-else @click="isCommentLikeClicked(num)" class="far fa-heart"></i>
			</div>
		</section>

		<!-- 댓글 삭제 모달 -->
		<PostCommentModal v-if="isCommentModalOpen" />
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import PostCommentModal from './PostCommentModal.vue';

export default {
	name: 'PostComment',
	components: { PostCommentModal },
	props: {
		post: Object,
		i: Number,
	},
	computed: {
		...mapState('post', ['isCommentModalOpen']),
		commentLength() {
			return Object.keys(this.post.comment).length;
		},
	},
	data() {
		return {
			showAll: false,
			showCommentLength: true,
		};
	},
	methods: {
		...mapMutations('post', ['CONTROL_COMMENTMODAL', 'SET_POSTCOMMENTNUM', 'SET_POSTDOCNUM']),
		showAllComments() {
			this.showAll = true;
			this.showCommentLength = false;
		},
		isCommentLikeClicked(num) {
			this.post.comment[num].liked = !this.post.comment[num].liked;
		},
		showCommentOptionModal() {
			this.CONTROL_COMMENTMODAL(true);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Timeline/Post/PostComment.scss';
</style>
