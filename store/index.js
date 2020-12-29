import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 导入vuex模块
import Index from '@/store/Idnex/index.js'
import App from '@/store/App/App.js'

export default new Vuex.Store({
	modules:{
		Index,
		App
	}
})