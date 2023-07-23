export default {
  fullName(state) {
    return state.user ? `${state.user.firstName} ${state.user.lastName}` : '';
  },
  // Add more getters as needed
};
