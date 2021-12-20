<template>
	<div class="signin-container">
		<p class="signin-title">Vuestargram</p>

		<form @submit.prevent="validate">
			<div class="signin-input">
				<input type="text" v-model="email" placeholder="이메일" />
				<input type="text" :value="name" @input="updateUserName" placeholder="사용자 이름" />
				<input type="password" v-model="password" placeholder="비밀번호" />
				<input type="password" v-model="rePassword" placeholder="비밀번호 확인" />
			</div>

			<div class="signup-error" v-if="message.length">
				{{ message }}
			</div>

			<button
				type="submit"
				class="signin-button"
				:class="{ active: email && password && rePassword }"
				:disabled="!this.email || !this.password || !this.rePassword"
			>
				가입
			</button>
		</form>

		<footer>
			<div class="signin-footer">
				계정이 있으신가요?&nbsp;
				<router-link to="/sign-in" class="signin-footer-join"> 로그인하기</router-link>
			</div>
		</footer>
	</div>
</template>

<script>
import firebase from 'firebase/compat/app';
import { mapState, mapMutations } from 'vuex';

export default {
	name: 'SignUp',
	data() {
		return {
			email: '',
			password: '',
			rePassword: '',
			message: '',
		};
	},

	computed: {
		...mapState(['name']),
	},
	created() {
		return (this.message = '');
	},
	methods: {
		...mapMutations(['SET_USERNAME']),
		updateUserName(e) {
			this.SET_USERNAME(e.target.value);
		},

		validate() {
			if (this.password !== this.rePassword) {
				this.message = '비밀번호가 일치하지 않습니다';
				return;
			}

			firebase
				.auth()
				.createUserWithEmailAndPassword(this.email, this.password)
				.then(() => {
					this.createUserName();
					this.$router.replace({ name: 'main' });
				})
				.catch((error) => {
					switch (error.code) {
						case 'auth/email-already-in-use':
							this.message = '이미 사용중인 이메일 입니다.';
							break;
						case 'auth/invalid-email':
							this.message = '유효하지 않은 이메일입니다';
							break;
						case 'auth/weak-password':
							this.message = '비밀번호는 6자리 이상이어야 합니다';
							break;
					}
				});
		},

		createUserName() {
			firebase.auth().currentUser.updateProfile({
				displayName: this.name,
			});
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/SignIn.scss';
</style>
