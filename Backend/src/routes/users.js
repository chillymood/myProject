const router = require('koa-router')()
const { register, login } = require('../controller/user')
const loginCheck = require('../middleware/loginCheck')

router.prefix('/users')
//獲取(確認)用戶訊息
router.get('/getUserInfo', loginCheck, async (ctx, next) => {
  ctx.body = {
    errno: 0,
    data: ctx.session.userInfo
  }
})


//登入
router.post("/login", async (ctx, next) => {
  //獲取登入訊息
  const { username, password } = ctx.request.body
  //驗證登入
  const res = await login(username, password)
 
  //設置session ?
  ctx.session.userInfo = {
     username
  }
  console.log(ctx.session.userInfo)
  // 返回
  if (res) {
    ctx.body = {
      succsess: true
    }
      return;
  }

    ctx.body = {
    succsess: false,
    message:"登入失敗"
  }

})

//註冊
router.post("/register", async (ctx, next) => {
  //獲取註冊訊息(前端POST過來的)
  const userInfo = ctx.request.body
  //提交註冊
  try {
    const newInfo = await register(userInfo) //調用controllor
    //成功
    ctx.body = {
      succsess: true,
      data: newInfo
    }
  } catch (err) {
    //失敗
    console.error("註冊失敗", err)
    ctx.body = {
      succsess: false,
      message:"註冊失敗"
    }
  }

})

module.exports = router
