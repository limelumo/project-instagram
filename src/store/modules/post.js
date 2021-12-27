const post = {
	namespaced: true,
	state: {
		friendData: {},
		isCommentModalOpen: false,
		postCommentNum: '',
		postDocNum: '',
	},

	mutations: {
		CONTROL_COMMENTMODAL(state, payload) {
			state.isCommentModalOpen = payload;
		},
		SET_POSTCOMMENTNUM(state, payload) {
			state.postCommentNum = payload;
		},
		SET_POSTDOCNUM(state, payload) {
			state.postDocNum = payload;
		},
	},
};
export default post;
