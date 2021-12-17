export default {
	setUserName(state, payload) {
		state.name = payload;
	},

	controlModal(state, payload) {
		state.uploadStep = 1;
		state.isModalOpen = payload;
	},

	setUploadStep(state, payload) {
		state.uploadStep = payload;
	},

	setImgFile(state, payload) {
		state.imgFile = payload;
	},

	setImgUrl(state, payload) {
		state.imgUrl = payload;
	},

	setFilter(state, payload) {
		state.filtered = payload;
	},

	setPostText(state, payload) {
		state.postText = payload;
		console.log(state.postText);
	},

	setPostLocation(state, payload) {
		state.postLocation = payload;
		console.log(state.postLocation);
	},
};
