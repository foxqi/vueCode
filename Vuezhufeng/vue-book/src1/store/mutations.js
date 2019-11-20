import * as Types from './mutations-type.js';//里面的方法都拿出来
const mutations={
  [Types.INCREMENT](state,count){//state是自动放入的，默认指的就是当前的state
    state.count+=1;
  },
  [Types.DECREMENT](state,count){
    state.count-=1;
  }
};
export default mutations












