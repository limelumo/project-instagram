import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '@/pages/SignIn.vue';
import SignUp from '@/pages/SignUp.vue';
import firebase from 'firebase/compat/app';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/sign-in',
		},
		{
			path: '/sign-in',
			name: 'sign-in',
			component: SignIn,
		},
		{
			path: '/sign-up',
			name: 'sign-up',
			component: SignUp,
		},
		{
			path: '/main',
			name: 'main',
			component: () => import('@/pages/Main.vue'),
			meta: { requiresAuth: true },
		},
		{
			path: '/profile',
			name: 'main-profile',
			component: () => import('@/pages/MainProfile.vue'),
		},
		{
			path: '/dm',
			name: 'dm',
			component: () => import('@/pages/DM.vue'),
		},
	],
});

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
	const isAuthenticated = firebase.auth().currentUser;

	if (requiresAuth && !isAuthenticated) {
		next('/signIn');
	} else {
		next();
	}
});

export default router;
