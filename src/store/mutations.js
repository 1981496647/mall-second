import { ADD, ACC, PUSHTOKEN } from "./mutation-types";

export default {
  [ACC](state, payload) {
    payload.count += 1;
  },
  [ADD](state, payload) {
    state.cartList.push(payload);
  },
  [PUSHTOKEN](state, payload) {
    state.token = payload;
  },
};
