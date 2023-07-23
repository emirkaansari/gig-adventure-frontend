import {SET_USER} from "./mutation-types";
import {SET_LOADING} from "./mutation-types";

export default {
  [SET_USER](state, user) {
    state.user = user;
  },
  [SET_LOADING](state, isLoading) {
    state.loading = isLoading;
  },
};
