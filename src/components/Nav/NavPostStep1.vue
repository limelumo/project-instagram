<template>
	<div class="modal-container">
		<div class="modal-box">
			<section class="modal-box-header">
				<p>새 게시물 만들기</p>
			</section>

			<section class="modal-upload">
				<input @change="uploadImg" accept="image/*" type="file" id="fileUpload" />
				<label for="fileUpload"> 컴퓨터에서 선택 </label>
			</section>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

export default {
	name: 'NavPostStep1',
	computed: {
		...mapState(['imgFile', 'imgUrl', 'uploadStep']),
	},

	methods: {
		...mapMutations(['setImgFile', 'setImgUrl', 'setUploadStep']),

		uploadImg(e) {
			this.setImgFile(e.target.files[0]);
			const storageRef = firebase.storage().ref();
			const saveImgTo = storageRef.child(`image/${this.imgFile.name}`);
			const upload = saveImgTo.put(this.imgFile);

			upload.on(
				'state_changed',
				null,
				(error) => {
					console.error(error);
				},
				() => {
					upload.snapshot.ref.getDownloadURL().then((url) => {
						this.setImgUrl(url);
						this.setUploadStep(2);
					});
				}
			);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/NavPost.scss';
</style>
