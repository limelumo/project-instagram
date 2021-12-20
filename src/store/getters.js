export default {
	getUser(state) {
		return state.user;
	},
	isUserAuth(state) {
		return !!state.user;
	},
	getError(state) {
		return state.error;
	},
	GET_MATCHEDUSER: (state) => {
		return state.profilePosts.filter((post) => post.user == state.name);
	},
};
