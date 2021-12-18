export default {
	setUserName(state, payload) {
		state.name = payload;
	},

	controlModal(state, payload) {
		state.isModalOpen = payload;
		if (state.isModalOpen) {
			state.uploadStep = 1;
		}
	},

	controlDelModal(state, payload) {
		state.isDelModalOpen = payload;
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
	},

	setPostLocation(state, payload) {
		state.postLocation = payload;
	},

	setProfilePosts(state, payload) {
		state.profilePosts = payload;
	},

	isClikedPost(state, payload) {
		state.clikedPost = payload;
	},

	setPostNum(state, payload) {
		state.postNum = payload;
	},
};
