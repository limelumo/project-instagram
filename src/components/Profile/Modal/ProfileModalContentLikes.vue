<template>
	<section class="post-like-container">
		<div class="post-like">
			<ul class="post-like-icons">
				<li><i class="far fa-heart"></i></li>
				<!-- <li><i class="fas fa-heart"></i></li> -->
				<li><i class="far fa-comment"></i></li>
			</ul>
			<p><b>kimisuu</b>님 <b>외 10명</b>이 좋아합니다</p>
		</div>
	</section>
</template>

<script>
export default {
	name: 'ProfileModalContentLikes',
};
</script>

<style lang="scss" scoped>
.post-like-container {
	width: 100%;
	padding: 12px 14px;
}
.post-like {
	font-size: 12px;
}

.post-like-icons {
	@include flex('', '', '');
	margin-bottom: 12px;

	li {
		@include object(24px, 24px, '');
		margin-right: 8px;

		i {
			font-size: 24px;
			&:last-child {
				transform: rotateY(180deg);
			}
		}
	}
}
</style>
