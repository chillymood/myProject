//user controllor

const User = require("../model/User");
//登入
async function login(username, password) {
  //從數據庫查詢數據是否存在
 console.log(username, password)
  const user = await User.findOne({ username, password });
  if (user != null) {
    //登入成功
    return true;
  }
  return false;
}

//註冊
async function register(userInfo = {}) {
  //插入數據庫
  const newUser = await User.create(userInfo);
  //返回註冊的用戶信息
  return newUser;
}

module.exports = {
  register,
  login,
};
