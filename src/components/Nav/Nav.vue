<template>
	<nav id="nav">
		<section class="nav-container">
			<router-link to="/main">
				<p class="nav-title">Vuestargram</p>
			</router-link>
			<input class="nav-input" type="text" placeholder="검색" />
			<ul class="nav-icons">
				<!-- To Main -->
				<li>
					<router-link to="/main">
						<i class="fas fa-home"></i>
					</router-link>
				</li>

				<!-- DM -->
				<li>
					<router-link to="/dm">
						<i class="fas fa-paper-plane"></i>
					</router-link>
				</li>

				<!-- Post Modal -->
				<li @click="controlModal(true)">
					<i class="far fa-plus-square"></i>
				</li>

				<!-- Profile Popover -->
				<li v-popover:NavPopover.bottom>
					<NavPopover />
					<i class="fas fa-user-circle"></i>
				</li>
			</ul>
		</section>

		<NavModal v-if="isModalOpen" />
	</nav>
</template>

<script>
import NavPopover from './NavPopover.vue';
import NavModal from './Modal/NavModal.vue';
import { mapState, mapMutations } from 'vuex';

export default {
	name: 'Nav',
	components: {
		NavPopover,
		NavModal,
	},
	computed: {
		...mapState(['isModalOpen']),
	},
	methods: {
		...mapMutations(['controlModal']),
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Nav/Nav.scss';
</style>
