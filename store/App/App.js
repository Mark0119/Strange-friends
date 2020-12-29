// 注释：““
// 导入api

const state = {
	GetEquipmentNavHeight:Number,//设备状态栏高度
	GetEquipmentContentHeight:Number,//设备内容高度
};
const mutations = {
	//设备状态栏高度获取
	GetEquipmentNavHeight(state,val){
		state.GetEquipmentNavHeight=val
	},
	//设备内容高度获取
	GetEquipmentContentHeight(state,val){
		state.GetEquipmentContentHeight=val
	}
	
};
const getters = {
	//设备状态栏高度获取
	GetEquipmentNavHeight(state){
		return state.GetEquipmentNavHeight
	},
	//设备内容高度获取
	GetEquipmentContentHeight(state){
		return state.GetEquipmentContentHeight
	}
};
const actions = {};
export default {
	state,
	mutations,
	getters,
	actions,
};