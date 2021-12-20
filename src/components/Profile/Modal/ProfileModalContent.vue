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
import ProfileDeleteModal from './ProfileDeleteModal.vue';
import ProfileModalContentText from './ProfileModalContentText.vue';
import ProfileModalContentReply from './ProfileModalContentReply.vue';
import ProfileModalContentLikes from './ProfileModalContentLikes.vue';
import ProfileModalContentWriteReply from './ProfileModalContentWriteReply.vue';

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
		...mapState(['name', 'profilePosts', 'postNum', 'isDelModalOpen']),
	},
	created() {
		this.GET_POSTDATA();
	},
	methods: {
		...mapMutations(['CONTROL_DELMODAL']),
		...mapActions(['GET_POSTDATA', 'SET_POSTNUM']),
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Profile/ProfileModalContent.scss';
</style>
