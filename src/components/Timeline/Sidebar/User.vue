<template>
	<section id="user">
		<router-link to="/profile">
			<img src="@/assets/profile.png" alt="profile-img" />
		</router-link>
		<router-link to="/profile">
			<small>{{ name }}</small>
		</router-link>
	</section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
	name: 'User',
	computed: {
		...mapState(['name']),
	},
	created() {
		this.GET_USERNAME();
	},
	methods: {
		...mapActions(['GET_USERNAME']),
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Sidebar/User.scss';
</style>
