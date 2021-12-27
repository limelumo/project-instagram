<template>
	<section class="modal-content-footer-reply">
		<form>
			<textarea placeholder="댓글 달기..."></textarea>
			<button>게시</button>
		</form>
	</section>
</template>

<script>
export default {
	name: 'ProfileModalContentWriteReply',
};
</script>

<style lang="scss" scoped>
.modal-content-footer-reply {
	@include flex(space-between, center, '');
	width: 100%;
	border-top: 1px solid $border-color;

	form {
		width: inherit;
		textarea {
			@include object(90%, auto, '');
			border: 0;
			resize: none;
			padding: 16px 0 0 14px;

			&::-webkit-scrollbar {
				display: none;
			}
		}

		button {
			@include font(14px, $point-color, bold, 'Noto Sans KR');
			background: transparent;
		}
	}
}
</style>
