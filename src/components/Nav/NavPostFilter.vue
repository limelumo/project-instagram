<template>
	<div id="modal-filters">
		<p>필터</p>
		<ul class="modal-filter-container">
			<li class="modal-filter" v-for="(filter, i) in filters" :key="i" @click="setFilter(filter)">
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
	name: 'NavPostFilter',
	computed: {
		...mapState(['imgUrl']),
	},
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

	methods: {
		...mapMutations(['setFilter']),
		applyFilter() {},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/NavPostFilter.scss';
</style>
