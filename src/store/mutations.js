//self.$store.commit('loginInfoSet', data.loginInfo);
import state from "./state";

export default {

  loginInfoSet(state, info) {
    state.loginInfo = info;
  },

  industryInfoSet(state, info) {
    state.industryInfo = info;
  },

  userInfoSet(state, info) {
    state.userInfo = info;
  },
  userPlatformTypeEnumSet(state, type) {
    state.userInfo.user.platformMainTypeEnum = type;
  },
  userIndividualTypeEnumSet(state, type) {
    state.userInfo.individual.individualTypeEnum = type;
  },
  userBaseSet(state, base) {
    state.userInfo.user.username = base.username;
    state.userInfo.user.password = base.password;
  },
  // userOrganizationTypeIdSet(state, id) {
  //   state.userInfo.organization.organizationTypeId = id;
  // },
  userOrganizationSet(state, org) {
    state.userInfo.organization = org;
  },
  userRepresentativeSet(state, rep) {
    state.userInfo.organization.representative = rep;
  },

  orgPlatformTypeEnumSet(state, type) {
    state.organization.user.platformMainTypeEnum = type;
  },
  orgIndividualTypeEnumSet(state, type) {
    state.organization.representative.individualTypeEnum = type;
  },
  orgUserSet(state, user) {
    state.organization.user = user
  },
  orgRepresentativeSet(state, rep) {
    state.organization.representative = rep;
  },
  orgBaseSet(state, org){
    state.organization = org;
  },
  indPlatformTypeEnumSet(state, type) {
    state.individual.user.platformMainTypeEnum = type;
  },
  indIndividualTypeEnumSet(state, type) {
    state.individual.individualTypeEnum = type;
  },
  indUserSet(state, user) {
    state.individual.user = user
  },
  indBaseSet(state, ind){
    state.individual = ind;
  },
  indTelephoneSet(state, telephone){
    state.individual.telephone = telephone;
  }
}
