<template>
	<div class="dm-container">
		<Nav />

		<article id="dm">
			<button>메세지 보내기</button>
		</article>
	</div>
</template>

<script>
import Nav from '../components/Nav/Nav.vue';

export default {
	name: 'DM',
	components: {
		Nav,
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/DM/DM.scss';
</style>
