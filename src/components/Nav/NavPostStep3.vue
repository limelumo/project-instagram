<template>
	<div class="modal-container">
		<div class="modal-box">
			<ul class="modal-box-header">
				<li @click="setUploadStep(2)">
					<i class="fas fa-arrow-left"></i>
				</li>
				<li class="modal-box-header-title">새 게시물 만들기</li>
				<li class="modal-box-header-next">공유하기</li>
			</ul>

			<section class="modal-box-body">
				<div class="modal-box-img">
					<img :src="imgUrl" :class="filtered" alt="uploadImg" />
				</div>

				<NavPostContent />
			</section>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import NavPostContent from './NavPostContent.vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

export default {
	name: 'NavPostStep3',
	components: {
		NavPostContent,
	},
	computed: {
		...mapState(['imgUrl', 'filtered']),
	},

	data() {
		return {
			toSave: {},
		};
	},

	methods: {
		...mapMutations(['setUploadStep']),

		uploadPost() {
			(this.toSave = {
				Avater: this.userAvatar,
				user: this.name,
				content: this.text,
				date: new Date(),
				img: this.imgUrl,
				locaton: this.location,
			}),
				firebase
					.firestore()
					.collection('userPosts')
					.add(this.toSave)
					.then((result) => {
						console.log(result);
					})
					.catch((error) => {
						console.log(error);
					});
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/NavPost.scss';
</style>
