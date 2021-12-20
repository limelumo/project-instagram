import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		name: '',
		isModalOpen: false,
		imgUrl: '',
		filtered: '',
		isDelModalOpen: false,
		//
		uploadStep: 1,
		imgFile: '',
		postText: '',
		postLocation: '',
		//
		profilePosts: [],
		clikedPost: false,
		postNum: '',
		options: {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		},
	},
	getters,
	mutations,
	actions,
});

export default store;
