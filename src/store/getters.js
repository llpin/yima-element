import state from "./state";

export default {
  snackbar: state => {
    return state.snackbar;
  },
  navigation: state => {
    return state.navigation;
  },
  userInfo: state => {
    return state.userInfo;
  }
}
