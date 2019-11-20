
import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger.js'//logger是一个日志插件
import mutations from './mutations.js'
Vue.use(Vuex);
//容器是惟一的
const state={count:0};
const getters={
  val:(state)=>state.count%2?'奇数':'偶数'
};
export default new Vuex.Store({
  state,
  getters,
  plugins:[logger()],//打印出日志
  strict:true,//只能通过mutation（相当于管理员）来更改状态，（如果不用它，数据不能实时更新），但mutation不支持异步
  mutations
});
