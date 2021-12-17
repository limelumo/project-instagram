<template>
	<transition name="NavPost" appear>
		<article id="modal">
			<div class="modal-closeBtn-container" @click="controlModal(false)">
				<button type="button">
					<i class="fas fa-times"></i>
				</button>
			</div>

			<NavPostStep1 v-if="uploadStep == 1" />
			<NavPostStep2 v-if="uploadStep == 2" />
			<NavPostStep3 v-if="uploadStep == 3" />
		</article>
	</transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import NavPostStep1 from './NavPostStep1.vue';
import NavPostStep2 from './NavPostStep2.vue';
import NavPostStep3 from './NavPostStep3.vue';

export default {
	name: 'NavPost',
	components: {
		NavPostStep1,
		NavPostStep2,
		NavPostStep3,
	},
	computed: {
		...mapState(['uploadStep']),
	},
	methods: {
		...mapMutations(['controlModal']),
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/NavPost.scss';
</style>
