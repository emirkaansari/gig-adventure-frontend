
import api from './api';
import {FETCH_USER} from "@/pages/login/store/action-types";
import {SET_LOADING, SET_USER} from "@/pages/login/store/mutation-types";

export default {
  async [FETCH_USER]({ commit }) {
    commit(SET_LOADING, true);

    try {
      const user = await api.fetchUser();
      commit(SET_USER, user);
    } catch (error) {
      // Handle error
    }

    commit(SET_LOADING, false);
  },
  // Add more actions as needed
};
