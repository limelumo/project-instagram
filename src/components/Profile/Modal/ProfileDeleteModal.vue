<template>
	<transition name="profileDelModal" appear>
		<div id="modal">
			<ul class="modal-box">
				<li @click="getPostID">삭제</li>
				<li @click="CONTROL_DELMODAL(false)">취소</li>
			</ul>
		</div>
	</transition>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export default {
	name: 'ProfilePostDelModal',
	computed: {
		...mapState(['profilePosts', 'postNum']),
	},
	data() {
		return {
			id: '',
		};
	},
	methods: {
		...mapMutations(['CONTROL_DELMODAL', 'SET_CLICKEDPOST']),
		...mapActions(['GET_POSTDATA']),

		deletePost() {
			firebase
				.firestore()
				.collection('userPosts')
				.doc(this.id)
				.delete()
				.then(() => {
					this.CONTROL_DELMODAL(false);
					this.SET_CLICKEDPOST(false);
					this.GET_POSTDATA();
				});
		},

		getPostID() {
			firebase
				.firestore()
				.collection('userPosts')
				.get()
				.then((result) => {
					this.id = result.docs[this.postNum].id;
				})
				.then(() => {
					this.deletePost();
				});
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Profile/ProfileDeleteModal.scss';
</style>
