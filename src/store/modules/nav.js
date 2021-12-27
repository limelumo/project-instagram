const nav = {
	namespaced: true,
	state: {
		uploadStep: 1,
		imgFile: '',
		imgUrl: '',
		filtered: '',
		postText: '',
		postLocation: '',
		isModalOpen: false,
	},

	mutations: {
		CONTROL_MODAL(state, payload) {
			state.isModalOpen = payload;
			if (state.isModalOpen) {
				state.uploadStep = 1;
			}
		},
		SET_IMGFILE(state, payload) {
			state.imgFile = payload;
		},
		SET_IMGURL(state, payload) {
			state.imgUrl = payload;
		},
		SET_UPLOADSTEP(state, payload) {
			state.uploadStep = payload;
		},
		SET_FILTER(state, payload) {
			state.filtered = payload;
		},
		SET_POSTTEXT(state, payload) {
			state.postText = payload;
		},
		SET_POSTLOCATION(state, payload) {
			state.postLocation = payload;
		},
	},
};

export default nav;
