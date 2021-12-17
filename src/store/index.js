import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

// const initialState = () => {
// 	return { user: null };
// };

const store = new Vuex.Store({
	// state: initialState(),
	state: {
		name: '',
		isModalOpen: false,
		uploadStep: 1,
		imgFile: '',
		imgUrl: '',
		filtered: '',
		postText: '',
		postLocation: '',
	},
	getters,
	mutations,
	actions,
});

export default store;
