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
};
