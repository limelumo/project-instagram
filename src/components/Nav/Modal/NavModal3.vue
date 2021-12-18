<template>
	<div class="modal-container">
		<div class="modal-box">
			<ul class="modal-box-header">
				<li @click="setUploadStep(2)">
					<i class="fas fa-arrow-left"></i>
				</li>
				<li class="modal-box-header-title">새 게시물 만들기</li>
				<li class="modal-box-header-next" @click="uploadPost">공유하기</li>
			</ul>

			<section class="modal-box-body">
				<div class="modal-box-img">
					<img :src="imgUrl" :class="filtered" alt="uploadImg" />
				</div>

				<NavModal3Content />
			</section>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import NavModal3Content from './NavModal3Content.vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

export default {
	name: 'NavPostStep3',
	components: {
		NavModal3Content,
	},
	computed: {
		...mapState(['name', 'postText', 'postLocation', 'imgUrl', 'filtered']),
	},

	data() {
		return {
			toSave: {},
		};
	},

	methods: {
		...mapMutations(['controlModal']),
		...mapActions(['getPostData']),

		uploadPost() {
			this.toSave = {
				user: this.name,
				content: this.postText,
				date: new Date(),
				img: this.imgUrl,
				filter: this.filtered,
				location: this.postLocation,
			};
			this.addToDB();
		},

		addToDB() {
			firebase
				.firestore()
				.collection('userPosts')
				.add(this.toSave)
				.then(this.controlModal(false))
				.then(this.getPostData)
				.catch((error) => {
					console.log(error);
				});
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Nav/NavModal.scss';
</style>
