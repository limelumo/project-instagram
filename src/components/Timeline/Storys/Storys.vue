<template>
	<section id="storys">
		<Story />
		<StoryModal v-if="isStoryModalOpen" />
	</section>
</template>

<script>
import { mapState } from 'vuex';
import Story from './Story.vue';
import StoryModal from './modal/StoryModal.vue';

export default {
	name: 'Storys',
	components: {
		Story,
		StoryModal,
	},
	computed: {
		...mapState('story', ['isStoryModalOpen']),
	},
};
</script>

<style lang="scss" scoped>
#storys {
	@include flex('', center, '');
	background-color: white;
	margin-bottom: 24px;
	border: 1px solid $border-color;
	border-radius: $border-radius-size;
	padding: 16px 0;
	margin-bottom: 24px;
}
</style>
