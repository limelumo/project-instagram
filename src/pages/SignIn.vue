<template>
	<div class="signin-container">
		<p class="signin-title">Vuestargram</p>

		<form @submit.prevent="validate">
			<div class="signin-input">
				<input type="text" v-model="email" placeholder="이메일" />
				<input type="password" v-model="password" placeholder="비밀번호" />
			</div>

			<div class="signin-error" v-if="message.length">
				{{ message }}
			</div>

			<button
				type="submit"
				class="signin-button"
				:class="{ active: email && password }"
				:disabled="!this.email || !this.password"
			>
				로그인
			</button>
		</form>

		<footer>
			<div class="signin-footer">
				계정이 없으신가요?&nbsp;
				<router-link to="/sign-up" class="signin-footer-join">
					가입하기</router-link
				>
			</div>
		</footer>
	</div>
</template>

<script>
import firebase from 'firebase/compat/app';

export default {
	name: 'signIn',
	data() {
		return {
			email: '',
			password: '',
			message: '',
		};
	},

	created() {
		return (this.message = '');
	},

	methods: {
		validate() {
			firebase
				.auth()
				.signInWithEmailAndPassword(this.email, this.password)
				.then(() => {
					this.$router.replace({ name: 'main' });
				})
				.catch((error) => {
					switch (error.code) {
						case 'auth/user-not-found':
							this.message = '가입되지 않은 이메일입니다';
							break;
						case 'auth/invalid-email':
							this.message = '유효하지 않은 이메일입니다';
							break;
						case 'auth/wrong-password':
							this.message = '비밀번호를 확인해주세요';
							break;
					}
				});
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/style/SignIn.scss';
</style>
