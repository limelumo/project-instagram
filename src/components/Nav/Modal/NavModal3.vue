<template>
	<div class="modal-container">
		<div class="modal-box">
			<ul class="modal-box-header">
				<li @click="SET_UPLOADSTEP(2)">
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
	data() {
		return {
			toSave: {},
		};
	},
	computed: {
		...mapState('nav', ['postText', 'postLocation', 'imgUrl', 'filtered']),
		...mapState(['name']),
	},
	methods: {
		...mapMutations('nav', ['CONTROL_MODAL']),
		...mapActions(['GET_FRIENDSDATA']),

		uploadPost() {
			this.toSave = {
				id: this.name,
				avatar:
					'https://firebasestorage.googleapis.com/v0/b/vuestagram-8933f.appspot.com/o/friendsAvatars%2Fprofile.png?alt=media&token=3010eb1e-7e2f-4bcd-b58b-dc4bbed557e3',
				img: this.imgUrl,
				content: this.postText,
				date: new Date(),
				filter: this.filtered,
				location: this.postLocation,
				likes: Math.ceil(Math.random() * 50),
				liekd: false,
				comment: '',
			};

			firebase
				.firestore()
				.collection('friendsPost')
				.add(this.toSave)
				.then(this.CONTROL_MODAL(false))
				.then(this.GET_FRIENDSDATA)
				.catch((error) => {
					console.log(error);
				});
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Nav/modal/NavModal.scss';
</style>
