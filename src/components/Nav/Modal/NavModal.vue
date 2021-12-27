<template>
	<transition name="NavModal" appear>
		<div class="modal">
			<div class="modal-closeBtn-container" @click="CONTROL_MODAL(false)">
				<button type="button">
					<i class="fas fa-times"></i>
				</button>
			</div>

			<NavModal1 v-if="uploadStep == 1" />
			<NavModal2 v-if="uploadStep == 2" />
			<NavModal3 v-if="uploadStep == 3" />
		</div>
	</transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import NavModal1 from './NavModal1.vue';
import NavModal2 from './NavModal2.vue';
import NavModal3 from './NavModal3.vue';

export default {
	name: 'NavModal',
	components: {
		NavModal1,
		NavModal2,
		NavModal3,
	},
	computed: {
		...mapState('nav', ['uploadStep']),
	},
	methods: {
		...mapMutations('nav', ['CONTROL_MODAL']),
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Nav/modal/NavModal.scss';
</style>
