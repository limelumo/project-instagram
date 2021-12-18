<template>
	<div id="modal-content">
		<ul class="modal-content-header">
			<li class="modal-content-header-avatar">
				<img src="@/assets/profile.png" alt="" />
			</li>
			<li>{{ name }}</li>
		</ul>

		<section class="modal-content-body">
			<textarea placeholder="문구입력..." :value="postText" @input="updateText"></textarea>

			<div class="modal-content-location">
				<label for="">
					<input type="text" placeholder="위치 추가" :value="postLocation" @input="updateLocation" />
				</label>
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
		...mapState(['name', 'postText', 'postLocation']),
	},
	methods: {
		...mapMutations(['setPostText', 'setPostLocation']),

		updateText(e) {
			this.setPostText(e.target.value);
		},
		updateLocation(e) {
			this.setPostLocation(e.target.value);
		},
	},
	created() {
		this.setPostText(null);
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Nav/NavModal3Content.scss';
</style>
