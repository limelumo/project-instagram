export default {
	methods: {
		isLikeClicked() {
			this.post.liked = !this.post.liked;

			if (this.post.liked) {
				this.post.likes++;
			} else {
				this.post.likes--;
			}
		},
	},
};
