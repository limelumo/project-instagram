<template>
	<div class="modal-container">
		<div class="modal-box">
			<ul class="modal-box-header">
				<li @click="setUploadStep(1)">
					<i class="fas fa-arrow-left"></i>
				</li>
				<li class="modal-box-header-title">편집</li>
				<li class="modal-box-header-next" @click="setUploadStep(3)">다음</li>
			</ul>

			<section class="modal-box-body">
				<div class="modal-box-img">
					<img :src="imgUrl" :class="filtered" alt="uploadImg" />
				</div>

				<NavPostFilter />
			</section>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import NavPostFilter from './NavPostFilter.vue';

export default {
	name: 'NavPostStep2',
	components: {
		NavPostFilter,
	},
	computed: {
		...mapState(['imgUrl', 'filtered']),
	},
	methods: {
		...mapMutations(['setUploadStep']),
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/NavPost.scss';
</style>
