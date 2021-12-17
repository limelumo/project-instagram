import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import '@/plugins/firebase.js';
import firebase from 'firebase/compat/app';
import Popover from 'vue-js-popover';
import VModal from 'vue-js-modal';

Vue.config.productionTip = false;
Vue.use(Popover).use(VModal);

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
