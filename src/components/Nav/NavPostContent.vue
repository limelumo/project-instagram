<template>
	<div id="modal-content">
		<ul class="modal-content-header">
			<li class="modal-content-header-avatar">
				<img src="@/assets/flitto.png" alt="" />
			</li>
			<li>{{ name }}</li>
		</ul>

		<section class="modal-content-body">
			<!-- <textarea placeholder="문구입력..." v-model="postText"></textarea> -->
			<textarea placeholder="문구입력..." :value="postText" @change="updateText"></textarea>

			<div class="modal-content-location">
				<label for="">
					<input type="text" placeholder="위치 추가" v-model="postLocation" />
				</label>
				<i class="fas fa-map-marker-alt"></i>
			</div>
		</section>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import firebase from 'firebase/compat/app';

export default {
	name: 'NavPostContent',
	computed: {
		...mapState(['name', 'postText', 'postLocation']),

		// postText: {
		// 	get() {
		// 		return this.postText;
		// 	},
		// 	set(value) {
		// 		this.$store.commit('setPostText', value);
		// 	},
		// },

		// postLocation: {
		// 	get() {
		// 		return this.postLocation;
		// 	},
		// 	set(value) {
		// 		this.$store.commit('setPostLocation', value);
		// 	},
		// },
	},

	data() {
		return {
			userAvatar: '',
		};
	},

	methods: {
		updateText(e) {
			this.$store.commit('setPostText', e.target.value);
		},
	},

	created() {
		const user = firebase.auth().currentUser.displayName;
		return this.$store.commit('setUserName', user);
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/NavPostContent.scss';
</style>
