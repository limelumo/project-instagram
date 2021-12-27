<template>
	<header class="post-header-container">
		<ul class="post-header-user">
			<li class="post-header-user-img">
				<img :src="post.avatar" alt="" />
			</li>
			<li>{{ post.id }}</li>
		</ul>
	</header>
</template>

<script>
export default {
	name: 'PostHeader',
	props: {
		post: Object,
		i: Number,
	},
};
</script>

<style lang="scss" scoped>
.post-header {
	&-container {
		@include flex(space-between, center, '');
		padding: 16px;
	}
	&-user {
		@include flex('', center, '');
		&-img {
			@include object(32px, 32px, '');
			border: 1px solid $border-color;
			border-radius: 50%;
		}

		li {
			overflow: hidden;
			&:first-child {
				margin-right: 8px;
			}
			&:last-child {
				@include font(14px, '', bold, '');
			}
		}
	}
}
</style>
