<template>
	<div class="modal-container">
		<div class="modal-box">
			<ul class="modal-box-header">
				<li @click="SET_UPLOADSTEP(1)">
					<i class="fas fa-arrow-left"></i>
				</li>
				<li class="modal-box-header-title">편집</li>
				<li class="modal-box-header-next" @click="SET_UPLOADSTEP(3)">다음</li>
			</ul>

			<section class="modal-box-body">
				<div class="modal-box-img">
					<img :src="imgUrl" :class="filtered" alt="uploadImg" />
				</div>

				<NavModal2Filter />
			</section>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import NavModal2Filter from './NavModal2Filter.vue';

export default {
	name: 'NavPostStep2',
	components: {
		NavModal2Filter,
	},
	computed: {
		...mapState(['imgUrl', 'filtered']),
	},
	methods: {
		...mapMutations(['SET_UPLOADSTEP']),
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Nav/NavModal.scss';
</style>
