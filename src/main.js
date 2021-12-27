import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Popover from 'vue-js-popover';
import VModal from 'vue-js-modal';
import VueLazyload from 'vue-lazyload';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import EmojiPickerPlugin from 'vue-emoji-picker';
// import VueMaterial from 'vue-material';
// import 'vue-material/dist/vue-material.min.css';
// import 'vue-material/dist/theme/default.css';

import '@/firebase/firebaseInit.js';
import firebase from 'firebase/compat/app';

Vue.config.productionTip = false;
Vue.use(Popover).use(VModal).use(VueLazyload).use(VueAwesomeSwiper).use(EmojiPickerPlugin);
// .use(VueMaterial)

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
