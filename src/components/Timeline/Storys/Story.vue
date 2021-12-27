<template>
	<swiper ref="filterSwiper" :options="swiperOption">
		<swiper-slide v-for="(story, i) in storyPosts" :key="i">
			<button
				class="story-button"
				@click="
					CONTROL_STORYMODAL(true);
					SET_STORYNUM(i);
					closeStoryModal();
				"
			>
				<span class="story-img">
					<img :src="story.img" />
				</span>
				<div class="story-id" v-if="story.id.length <= 10">{{ story.id }}</div>
				<div class="story-id" v-else>{{ `${story.id.slice(0, 10)}..` }}</div>
			</button>
		</swiper-slide>
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>
	</swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { mapState, mapMutations, mapActions } from 'vuex';
import 'swiper/css/swiper.css';

export default {
	name: 'Story',
	components: {
		Swiper,
		SwiperSlide,
	},
	computed: {
		...mapState('story', ['storyPosts']),
	},

	data() {
		return {
			friendsAvatars: [],
			swiperOption: {
				slidesPerView: 'auto',
				slidesPerGroup: 3,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			},
		};
	},

	created() {
		this.GET_STORYDATA();
	},

	methods: {
		...mapMutations('story', ['CONTROL_STORYMODAL', 'SET_STORYNUM']),
		...mapActions('story', ['GET_STORYDATA']),

		closeStoryModal() {
			setTimeout(() => {
				this.CONTROL_STORYMODAL(false);
			}, 5000);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/Timeline/Story/Story.scss';
</style>
