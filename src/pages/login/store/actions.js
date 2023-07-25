
import api from './api';
import {REGISTER_USER} from "@/pages/login/store/action-types";
import {SET_LOADING, SET_USER} from "@/pages/login/store/mutation-types";

export default {
  async [REGISTER_USER]({ commit }, data) {
    try {
      commit(SET_LOADING, true);

      // Make the API call to register the user
      const response = await api.registerUser(data);

      // Assuming the token is returned in the 'token' property of the response data
      const token = response.data.token;

      // Store the token in the localStorage
      localStorage.setItem('accessToken', token);

      // Optionally, you can also commit a mutation to update the state with the user data
      commit(SET_USER, response.data.user);

      commit(SET_LOADING, false);
    } catch (error) {
      // Handle the error from the API call
      console.error('Error registering user:', error);

      // Optionally, you can commit a mutation to handle the error in the state
      //commit(SET_ERROR, error.message);

      commit(SET_LOADING, false);
    }
  },
  // Add more actions as needed
};
