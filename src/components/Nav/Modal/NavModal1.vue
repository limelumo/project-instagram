<template>
	<div class="modal-container">
		<div class="modal-box">
			<section class="modal-box-header">
				<p>새 게시물 만들기</p>
			</section>

			<section class="modal-upload">
				<ul class="modal-upload-drag">
					<li>
						<img src="@/assets/drag.png" />
					</li>
					<li>
						<p>사진과 동영상을 여기에 끌어다 놓으세요</p>
					</li>
				</ul>

				<div class="modal-upload-choose">
					<input @change="uploadImg" accept="image/*" type="file" id="fileUpload" />
					<label for="fileUpload"> 컴퓨터에서 선택 </label>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

export default {
	name: 'NavModal1',
	computed: {
		...mapState('nav', ['imgFile', 'imgUrl', 'uploadStep']),
	},

	methods: {
		...mapMutations('nav', ['SET_IMGFILE', 'SET_IMGURL', 'SET_UPLOADSTEP']),

		uploadImg(e) {
			this.SET_IMGFILE(e.target.files[0]);

			const storageRef = firebase.storage().ref(); // Create a root ref
			const saveImgTo = storageRef.child(`image/${this.imgFile.name}`); // Create a reference to 'image/file.jpg'
			const upload = saveImgTo.put(this.imgFile); // upload

			upload.snapshot.ref.getDownloadURL().then((url) => {
				this.SET_IMGURL(url);
				this.SET_UPLOADSTEP(2);
			});
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Nav/modal/NavModal.scss';
</style>
