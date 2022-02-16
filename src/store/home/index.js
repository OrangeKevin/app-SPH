import { reqCategoryList } from "@/api";
const state = {
  //state默认初始值别瞎写，根据接口返回值类型确定
  categoryList: []
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  }
};
const actions = {
  async categoryList({commit}){
    let result = await reqCategoryList()
    if(result.code == 200){
      commit("CATEGORYLIST", result.data)
    }
  }
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}