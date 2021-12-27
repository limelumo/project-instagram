<template>
	<div id="storymodal-content">
		<img :src="storyPosts[storyNum].storyImg" class="content-img" />

		<header class="content-header">
			<div class="content-header-progress">
				<div class="content-header-progress-bar"></div>
			</div>

			<ul class="content-header-info">
				<li>
					<img :src="storyPosts[storyNum].img" />
				</li>
				<li>{{ storyPosts[storyNum].id }}</li>
				<li>{{ getStoryDate }}</li>
			</ul>
		</header>

		<footer class="content-footer">
			<div class="content-footer-container">
				<div>
					<textarea rows="1" placeholder="friend_one님에게 답장하기..."></textarea>
				</div>
				<button>보내기</button>
			</div>
		</footer>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'StoryModalContent',
	computed: {
		...mapState('story', ['storyPosts', 'storyNum', 'isStoryModalOpen']),
		...mapState(['options']),
		getStoryDate() {
			return this.storyPosts[this.storyNum].date.toDate().toLocaleDateString('ko-KR', this.options);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Timeline/Story/StoryModalContent.scss';
</style>
