import Vue from 'vue';
import Vuex from 'vuex';
import nav from './modules/nav';
import post from './modules/post';
import profile from './modules/profile';
import sidebar from './modules/sidebar';
import story from './modules/story';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		nav,
		profile,
		post,
		sidebar,
		story,
	},

	state: {
		name: '',
		options: {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		},
		profilePosts: [],
		friendPosts: [],
	},

	getters: {
		getMatchedUser: (state) => {
			return state.friendPosts.filter((post) => post.id === state.name);
		},
	},

	mutations: {
		SET_USERNAME(state, payload) {
			state.name = payload;
		},
		SET_PROFILEPOSTS(state, payload) {
			state.profilePosts = payload;
		},
		SET_FRIENDPOSTS(state, payload) {
			state.friendPosts = payload;
		},
	},

	actions: {
		GET_USERNAME({ commit }) {
			const user = firebase.auth().currentUser.displayName;
			commit('SET_USERNAME', user);
		},

		GET_FRIENDSDATA({ commit }) {
			firebase
				.firestore()
				.collection('friendsPost')
				.orderBy('date', 'desc')
				.get()
				.then((result) => {
					const data = result.docs.map((doc) => {
						return doc.data();
					});
					commit('SET_FRIENDPOSTS', data);
				});
		},
	},
});

export default store;
