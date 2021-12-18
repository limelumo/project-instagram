<template>
	<div class="modal-content-container">
		<div id="modal-content">
			<!-- 유저 -->
			<header class="modal-content-header">
				<span class="modal-content-header-avatar">
					<img src="@/assets/profile.png" />
				</span>
				<ul>
					<li class="modal-content-header-name">{{ name }}</li>
					<li class="modal-content-header-loacation">{{ profilePosts[postNum].location }}</li>
				</ul>
				<span @click="controlDelModal(true)">
					<i class="fas fa-ellipsis-h"></i>
				</span>
			</header>

			<div class="modal-content-body">
				<div class="modal-content-body-avatar">
					<img src="@/assets/profile.png" />
				</div>
				<div class="modal-content-body-text">
					<span>{{ name }}</span>
					<span>{{ profilePosts[postNum].content }}</span>
					<span>{{ getDate }}</span>
				</div>
			</div>

			<div class="modal-content-footer">
				<!-- 좋아요 클릭, 그 밑에 댓글 달기 박스 -->
				<section></section>
				<section></section>
				<section class="modal-content-footer-reply">
					<form>
						<textarea placeholder="댓글 달기..."></textarea>
						<button>게시</button>
					</form>
				</section>
			</div>
		</div>
		<ProfileDeleteModal v-if="isDelModalOpen" />
	</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import ProfileDeleteModal from './ProfileDeleteModal.vue';

export default {
	name: 'ProfilePostModalContent',
	components: {
		ProfileDeleteModal,
	},
	computed: {
		...mapState(['name', 'profilePosts', 'postNum', 'isDelModalOpen', 'options']),
		getDate() {
			return this.profilePosts[this.postNum].date.toDate().toLocaleDateString('ko-KR', this.options);
		},
	},
	created() {
		this.getPostData();
	},
	methods: {
		...mapMutations(['controlDelModal']),
		...mapActions(['getPostData', 'setPostNum']),
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Profile/ProfileModalContent.scss';
</style>
