<template>
	<section>
		<div class="post-commnet-write-container">
			<PostCommentWriteBox @update="checkComment" />

			<form @submit.prevent="uploadComment">
				<button type="submit" class="post-comment-write-btn" :class="{ active: comment }" :disabled="!comment">게시</button>
			</form>
		</div>
	</section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import PostCommentWriteBox from './PostCommentWriteBox.vue';

export default {
	name: 'PostCommentWrite',
	components: {
		PostCommentWriteBox,
	},
	props: {
		post: Object,
		i: Number,
	},
	computed: {
		...mapState('post', ['postCommentNum']),
		...mapState(['name']),
	},
	data() {
		return {
			comment: '',
			docId: '',
			commentLength: '',
		};
	},

	mounted() {
		firebase
			.firestore()
			.collection('friendsPost')
			.orderBy('date', 'desc')
			.get()
			.then((result) => {
				const data = result.docs.map((doc) => {
					return doc.data();
				});

				this.docId = result.docs[this.i].id;
				this.commentLength = Object.keys(data[this.i].comment).length;
			})
			.catch((error) => console.log(error));
	},

	methods: {
		...mapActions(['GET_FRIENDSDATA']),

		checkComment(postComment) {
			this.comment = postComment;
		},

		uploadComment() {
			firebase
				.firestore()
				.collection('friendsPost')
				.doc(this.docId)
				.update({
					['comment.' + this.commentLength]: { id: this.name, liked: false, text: this.comment },
				})
				.then(() => {
					return this.commentLength;
				})
				.then(() => {
					this.GET_FRIENDSDATA();
				})
				.catch((error) => console.log(error));
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Timeline/Post/PostCommentWrite.scss';
</style>
