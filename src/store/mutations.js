export default {
	CONTROL_MODAL(state, payload) {
		state.isModalOpen = payload;
		if (state.isModalOpen) {
			state.uploadStep = 1;
		}
	},

	SET_USERNAME(state, payload) {
		state.name = payload;
	},

	SET_PROFILEPOSTS(state, payload) {
		state.profilePosts = payload;
	},

	//
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

	//
	CONTROL_DELMODAL(state, payload) {
		state.isDelModalOpen = payload;
	},

	SET_CLICKEDPOST(state, payload) {
		state.clikedPost = payload;
	},

	SET_POSTNUM(state, payload) {
		state.postNum = payload;
	},
};
