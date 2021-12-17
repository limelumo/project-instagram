<template>
	<div id="main-profile">
		<Nav />
		<Profile />
	</div>
</template>

<script>
import Nav from '../components/Nav/Nav.vue';
import Profile from '../components/Profile/Profile.vue';

export default {
	name: 'MainProfile',
	components: {
		Nav,
		Profile,
	},
};
</script>

<style scoped>
#main-profile {
	width: 100%;
}
</style>
