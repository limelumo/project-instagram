import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import Popover from 'vue-js-popover';
import VModal from 'vue-js-modal';
import VueLazyload from 'vue-lazyload';
import '@/firebase/firebaseInit.js';
import firebase from 'firebase/compat/app';

Vue.config.productionTip = false;
Vue.use(Popover).use(VModal).use(VueLazyload);

let app;
firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			router,
			store,
			render: (h) => h(App),
		}).$mount('#app');
	}
});
