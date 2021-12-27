<template>
	<transition name="postCommentModal" appear>
		<div class="modal">
			<ul class="modal-box">
				<li @click="deleteComment">삭제</li>
				<li @click="CONTROL_COMMENTMODAL(false)">취소</li>
			</ul>
		</div>
	</transition>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export default {
	name: 'PostCommentModal',
	computed: {
		...mapState('post', ['postCommentNum', 'postDocNum', 'name']),
	},
	data() {
		return {
			docId: '',
		};
	},
	mounted() {
		firebase
			.firestore()
			.collection('friendsPost')
			.orderBy('date', 'desc')
			.get()
			.then((result) => {
				this.docId = result.docs[this.postDocNum].id;
			})
			.catch((error) => console.log(error));
	},

	methods: {
		...mapMutations('post', ['CONTROL_COMMENTMODAL']),
		...mapActions(['GET_FRIENDSDATA']),

		deleteComment() {
			firebase
				.firestore()
				.collection('friendsPost')
				.doc(this.docId)
				.update({
					['comment.' + this.postCommentNum]: firebase.firestore.FieldValue.delete(),
				})
				.then(() => {
					this.CONTROL_COMMENTMODAL(false);
					this.GET_FRIENDSDATA();
				})
				.catch((error) => console.log(error));
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Timeline/Post/PostCommentModal.scss';
</style>
