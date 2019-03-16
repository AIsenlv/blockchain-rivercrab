import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
        arr:[],
        arr2:[],
  },
  getters:{
      arrs:state=>{
          return state.arr;
      },
      arrs2:state=>{
        return state.arr2;
    },
  
  },
  mutations:{
      //当前路由用于菜单高亮
      arrss:(state,data)=>{
          state.arr=data;
      },
      arrss2:(state,data)=>{
        state.arr2=data;
    },
  },
});
export default store;