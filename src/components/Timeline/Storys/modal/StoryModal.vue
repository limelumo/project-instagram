<template>
	<transition name="modal" appear>
		<div id="storyModal">
			<div class="modal-closeBtn" @click="CONTROL_STORYMODAL(false)">
				<button type="button">
					<i class="fas fa-times"></i>
				</button>
			</div>

			<StoryModalContent />
		</div>
	</transition>
</template>

<script>
import StoryModalContent from '../modal/StoryModalContent.vue';
import { mapMutations } from 'vuex';

export default {
	name: 'StoryModal',
	components: {
		StoryModalContent,
	},
	methods: {
		...mapMutations('story', ['CONTROL_STORYMODAL']),
	},
};
</script>

<style lang="scss" scoped>
.modal {
	&-enter,
	&-leave-to {
		opacity: 0;
		transition: opacity 300ms ease-in;
	}

	&-enter-to,
	&-leave {
		transition: opacity 300ms ease-out;
	}
}
#storyModal {
	@include flex(center, center, column);
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.65);
	z-index: 100;
	overflow-y: hidden;
}

.modal-closeBtn {
	position: absolute;
	right: 12px;
	top: 10px;
	z-index: 1;

	button {
		@include flex(center, center, column);
		background: 0 0;
		padding: 8px;

		i {
			font-size: 32px;
			color: white;
		}
	}
}
</style>
