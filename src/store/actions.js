import { ADD, ACC } from "./mutation-types";
export default {
  add({ state, commit }, payload) {
    return new Promise((resolve) => {
      //加工数据
      //   逻辑:  提取出相同的商品    判断有没有值  有 说明是相同的  然后就直接count +1
      let oldPayload = state.cartList.find((item) => item.iid === payload.iid);
      if (oldPayload) {
        commit(ACC, oldPayload);
        resolve("商品数量+1");
      } else {
        commit(ADD, payload);
        resolve("添加商品");
      }
    });
  },

  pushTokenAction({ state, commit }, payload) {
    return new Promise((reslove) => {
      state.token = payload;
      commit("pushToken", payload);
      reslove("token添加成功");
    });
  },
};
