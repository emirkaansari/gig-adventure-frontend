export default {
  fullName(state) {
    return state.user ? `${state.user.firstName} ${state.user.lastName}` : '';
  },

  getRegisterInfo(state) {
    return state.registerInfo
  }
  // Add more getters as needed
};
