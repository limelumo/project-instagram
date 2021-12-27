<template>
	<section id="post">
		<PostHeader :post="post" :i="i" />

		<main class="post-main-img" @dblclick="isLikeClicked">
			<img :src="post.img" />
		</main>

		<footer class="post-footer-container">
			<PostLike :post="post" :i="i" />
			<PostContent :post="post" :i="i" />
			<PostComment :post="post" :i="i" />
			<div class="post-footer-date">{{ getDate }}</div>
			<PostCommentWrite :post="post" :i="i" />
		</footer>
	</section>
</template>

<script>
import { mapState } from 'vuex';
import PostLikeMixin from '@/mixins/PostLikeMixin.js';
import PostHeader from './PostHeader.vue';
import PostLike from './PostLike.vue';
import PostComment from './comment/PostComment.vue';
import PostContent from './PostContent.vue';
import PostCommentWrite from './comment/PostCommentWrite.vue';

export default {
	name: 'Post',
	components: {
		PostHeader,
		PostLike,
		PostContent,
		PostComment,
		PostCommentWrite,
	},
	mixins: [PostLikeMixin],
	props: {
		post: Object,
		i: Number,
	},
	computed: {
		...mapState('post', ['options']),
		getDate() {
			return this.post.date.toDate().toLocaleDateString('ko-KR', this.options);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Timeline/Post/Post.scss';
</style>
