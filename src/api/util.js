
var RoleLevel = [
    'FIRST',
    'SECOND',
    'THIRD'
]


export default {
  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  },

  getNextRoleLevel(strLevel){
    var index = RoleLevel.indexOf(strLevel);
    if(RoleLevel.length > index){
      return RoleLevel[index + 1];
    }else {
      return null;
    }
  }

}

