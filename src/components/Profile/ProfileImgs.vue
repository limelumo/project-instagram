<template>
	<div class="profile-imgs-items">
		<div class="profile-imgs-item" v-for="(data, i) in 9" :key="i">
			<img src="@/assets/logo.png" />

			<ul class="profile-imgs-item-hover">
				<li class="profile-imgs-icon-heart">
					<i class="fas fa-heart"></i>
					{{ likedCount }}
				</li>

				<li class="profile-imgs-icon-comment">
					<i class="fas fa-comment"></i>
					{{ commentCount }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProfileImgs',
	data() {
		return {
			likedCount: 30,
			commentCount: 5,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/ProfileImgs.scss';
</style>
