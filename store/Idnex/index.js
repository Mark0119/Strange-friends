// 注释：““
// 导入api
const state = {
	indexes: 1
};
const mutations = {
	indexes(state, val) {
		state.indexes = val
	}
};
const getters = {
	indexes(state) {
		return state.indexes
	}
};
const actions = {};
export default {
	state,
	mutations,
	getters,
	actions,
};
