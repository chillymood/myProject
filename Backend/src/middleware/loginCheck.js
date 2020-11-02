//登入驗證的中間件

async function loginCheck(ctx, next) {
    const session = ctx.session|| {}
    const userInfo = session.userInfo
    if (userInfo && userInfo.username) {
        //登入驗證通過
        await next()
        return
    }
    // 登入驗證失敗
    ctx.body = {
        errno: -1,
        massage:"用戶尚未登入"
    }

}

module.exports = loginCheck