<template>
	<div class="modal-filters">
		<p>필터</p>
		<ul class="modal-filter-container">
			<li class="modal-filter" v-for="(filter, i) in filters" :key="i" @click="SET_FILTER(filter)">
				<img :src="imgUrl" :class="filter" />
				<label class="modal-filter-name">
					{{ filter }}
				</label>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	name: 'NavModal2Filter',
	data() {
		return {
			filters: [
				'원본',
				'aden',
				'_1977',
				'brannan',
				'brooklyn',
				'earlybird',
				'hudson',
				'lark',
				'lofi',
				'mayfair',
				'moon',
				'nashville',
				'reyes',
				'toaster',
				'valencia',
				'walden',
				'willow',
				'xpro2',
			],
		};
	},
	computed: {
		...mapState('nav', ['imgUrl']),
	},
	methods: {
		...mapMutations('nav', ['SET_FILTER']),
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Nav/modal/NavModal2Filter.scss';
</style>
