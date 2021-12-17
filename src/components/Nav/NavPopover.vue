<template>
	<transition name="NavPopover" appear>
		<popover name="NavPopover" :pointer="true" :width="width" :event="event">
			<router-link to="/profile">
				<ul class="profile">
					<li>
						<i class="far fa-user-circle"></i>
					</li>
					<li>프로필</li>
				</ul>
			</router-link>

			<div class="logout" @click="signOut">로그아웃</div>
		</popover>
	</transition>
</template>

<script>
import firebase from 'firebase/compat/app';

export default {
	name: 'NavPopover',
	props: {
		event: {
			type: String,
			default: 'click',
		},
		width: {
			type: Number,
			default: 140,
		},
	},
	methods: {
		signOut() {
			firebase.auth().signOut();
			this.$router.replace({ name: 'sign-in' });
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/NavPopover.scss';
</style>
