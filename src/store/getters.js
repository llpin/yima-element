import state from "./state";
//this.$store.getters.loginInfo;
export default {
  loginInfo: state => {
    return state.loginInfo;
  },
  industryInfo: state => {
    return state.industryInfo;
  },
  userInfo: state => {
    return state.userInfo;
  },
  organization: state => {
    return state.organization;
  },
  individual: state => {
    return state.individual;
  }


}
