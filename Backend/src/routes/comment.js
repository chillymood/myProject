//留言功能的路由
const router = require("koa-router")();
const loginCheck = require("../middleware/loginCheck");
const { create, getList, del, update, link } = require("../controller/comment");
const { connect } = require("mongoose");

//更新留言
router.post("/update", loginCheck, async (ctx, next) => {
  //獲取id content
  const { _id, content } = ctx.request.body;
  //獲取用戶名
  const { username } = ctx.session.userInfo
  //執行更新
  try {
    const newData = await update(_id, username, content);
    ctx.body = { errno: 0, data: newData };
  } catch (err) {
    //失敗
    console.log("更新失敗", err);
    ctx.body = { errno: -1, message: "更新失敗" };
  }
});

//刪除留言
router.post("/del", loginCheck, async (ctx, next) => {
  //獲取ID
  const { _id } = ctx.request.body;
  //獲取用戶名
  const { username } = ctx.session.userInfo
  //執行刪除
  try {
    delResult = await del(_id, username);
    ctx.body = { errno: 0 };
  } catch (err) {
    //失敗
    console.error("刪除失敗", err);

    ctx.body = {
      errno: -1,
      message: "刪除失敗",
    };
  }
});

//獲取留言列表
router.prefix("/comment");
router.get("/list", async (ctx, next) => {
  // 獲取filterType  1全部  2自己
  let { filterType } = ctx.query; //<--查詢URL參數
  filterType = parseInt(filterType) || 1;
  //獲取當前用戶名
  let username = "";
  if (filterType === 2) {
    username = ctx.session.userInfo.username;
    console.log(username);
  }
  //獲取留言列表
  const list = await getList(username);
  ctx.body = {
    success: 0,
    data: list,
  };
});

//創建留言
router.post(
  "/create", loginCheck, async (ctx, next) => {
    //獲取留言訊息
    const { title, content, imageUrl} = ctx.request.body;
    const { username } = ctx.session.userInfo;
    console.log( username )
    //提交留言 使用controllor
    const newComment = await create(title, content, imageUrl, username);
    //返回
    ctx.body = {
      success: true,
      data: newComment,
    };
  }
);

// 連結留言;
router.get("/detail", async (ctx, next) => {
  let { id } = ctx.query;
  const newlink = await link(id)
  ctx.body = { 
    success: true,
    data:newlink
  }
});

module.exports = router;
