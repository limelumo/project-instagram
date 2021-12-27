<template>
	<transition name="PostModal" appear>
		<div class="modal">
			<!-- 백그라운드 닫기 버튼 -->
			<div class="modal-closeBtn-container" @click="SET_CLICKEDPOST(false)">
				<button type="button">
					<i class="fas fa-times"></i>
				</button>
			</div>

			<article class="modal-container">
				<!-- 왼쪽 이미지 -->
				<div class="modal-box-img">
					<img :src="profilePosts[postNum].img" :class="profilePosts[postNum].filter" />
				</div>

				<!-- 오른쪽 피드 내용 -->
				<ProfileModalContent />
			</article>
		</div>
	</transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import ProfileModalContent from './content/ProfileModalContent.vue';

export default {
	name: 'ProfileModal',
	components: {
		ProfileModalContent,
	},
	computed: {
		...mapState('profile', ['postNum']),
		...mapState('nav', ['filtered']),
		...mapState(['profilePosts']),
	},
	methods: {
		...mapMutations('profile', ['CONTROL_MODAL', 'SET_CLICKEDPOST']),
	},
};
</script>

//
<style lang="scss" scoped>
@import '@/style/Profile/modal/ProfileModal.scss';
</style>
