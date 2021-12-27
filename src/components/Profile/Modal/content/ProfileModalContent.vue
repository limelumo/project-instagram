<template>
	<div class="modal-content-container">
		<div class="modal-content">
			<!-- 유저 -->
			<header class="modal-content-header">
				<span class="modal-content-header-avatar">
					<img src="@/assets/profile.png" />
				</span>
				<ul>
					<li class="modal-content-header-name">{{ name }}</li>
					<li class="modal-content-header-loacation">{{ profilePosts[postNum].location }}</li>
				</ul>
				<span @click="CONTROL_DELMODAL(true)">
					<i class="fas fa-ellipsis-h"></i>
				</span>
			</header>

			<div class="modal-content-body">
				<ProfileModalContentText />
				<ProfileModalContentReply />
			</div>

			<div class="modal-content-footer">
				<ProfileModalContentLikes />
				<ProfileModalContentWriteReply />
			</div>
		</div>

		<ProfileDeleteModal v-if="isDelModalOpen" />
	</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import ProfileDeleteModal from '../ProfileDeleteModal.vue';
import ProfileModalContentText from '../content/ProfileModalContentText.vue';
import ProfileModalContentReply from '../content/ProfileModalContentReply.vue';
import ProfileModalContentLikes from '../content/ProfileModalContentLikes.vue';
import ProfileModalContentWriteReply from '../content/ProfileModalContentWriteReply.vue';

export default {
	name: 'ProfilePostModalContent',
	components: {
		ProfileDeleteModal,
		ProfileModalContentText,
		ProfileModalContentReply,
		ProfileModalContentWriteReply,
		ProfileModalContentLikes,
	},
	computed: {
		...mapState('profile', ['postNum', 'isDelModalOpen']),
		...mapState(['profilePosts', 'name']),
	},
	created() {
		this.GET_FRIENDSDATA();
	},
	methods: {
		...mapMutations('profile', ['CONTROL_DELMODAL']),
		...mapActions('profile', ['SET_POSTNUM']),
		...mapActions(['GET_FRIENDSDATA']),
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Profile/modal/ProfileModalContent.scss';
</style>
