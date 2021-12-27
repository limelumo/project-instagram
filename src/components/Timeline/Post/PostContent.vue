<template>
	<div class="post-footer-feed">
		<span class="post-footer-username">{{ post.id }}</span>

		<template v-if="post.content.length <= 40">
			<label>
				<span class="post-footer-text" v-html="post.content"></span>
			</label>
		</template>

		<template v-else>
			<label>
				<span class="post-footer-text" v-if="isShowAllClicked" v-html="post.content"></span>
				<span class="post-footer-text" v-else v-html="`${post.content.slice(0, 40)} ...`"></span>
				<button v-if="isShowAllClicked" @click="showAllText">접기</button>
				<button v-else @click="showAllText">더 보기</button>
			</label>
		</template>
		<span v-if="post.content.length >= 40"> </span>
	</div>
</template>

<script>
export default {
	name: 'PostContent',
	props: {
		post: Object,
		i: Number,
	},

	data() {
		return {
			isShowAllClicked: false,
		};
	},

	methods: {
		showAllText() {
			this.isShowAllClicked = !this.isShowAllClicked;
		},
	},
};
</script>

<style lang="scss" scoped>
.post-footer {
	&-feed {
		line-height: 20px;
		padding: 0 16px;

		button {
			@include font(14px, gray, '', '');
			background-color: transparent;
			padding: 0 4px;
		}
	}
	&-username {
		font-weight: bold;
		margin-right: 6px;
	}
}
</style>
