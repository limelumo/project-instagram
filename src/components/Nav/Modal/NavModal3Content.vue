<template>
	<div class="modal-content">
		<ul class="modal-content-header">
			<li class="modal-content-header-avatar">
				<img src="@/assets/profile.png" alt="" />
			</li>
			<li>{{ name }}</li>
		</ul>

		<section class="modal-content-body">
			<textarea placeholder="문구입력..." :value="postText" @input="updateText"></textarea>

			<div class="modal-content-location">
				<input type="text" placeholder="위치 추가" :value="postLocation" @input="updateLocation" />
				<i class="fas fa-map-marker-alt"></i>
			</div>
		</section>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	name: 'NavPostStep3Content',
	computed: {
		...mapState('nav', ['postText', 'postLocation']),
		...mapState(['name']),
	},
	created() {
		this.SET_POSTTEXT(null);
	},
	methods: {
		...mapMutations('nav', ['SET_POSTTEXT', 'SET_POSTLOCATION']),

		updateText(e) {
			this.SET_POSTTEXT(e.target.value);
		},
		updateLocation(e) {
			this.SET_POSTLOCATION(e.target.value);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Nav/modal/NavModal3Content.scss';
</style>
