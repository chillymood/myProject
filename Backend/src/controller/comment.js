//留言 controller

const Comment = require("../model/Comment");
//更新留言
async function update(_id, username, content) {
  const newDate = await Comment.findOneAndUpdate(
    { _id, username }, //只能更新自己的留言
    { content },
    { new: true } //返回更新之後的最新留言，不寫會是之前的。
  );
  return newDate;
}

//刪除留言
async function del(_id, username) {
  await Comment.deleteOne({
    _id,
    username, //只能刪除自己的留言
  });
}

//獲取留言列表
async function getList(username = "") {
  const whereOpt = {};
  if (username) {
    whereOpt.username = username;
  }

  const list = Comment.find(whereOpt).sort({ _id: -1 });
  return list;
}

//創建留言
async function create(title, content, imageUrl, username) {
  //保存到數據庫
  const newComment = await Comment.create({
    username,
    title,
    content,
    imageUrl,
  });
  return newComment;
}

//連結留言
async function link(id) {
  const newConnect = await Comment.findOne({ _id: id }) 
  return newConnect
}

module.exports = {
  create,
  getList,
  del,
  update,
  link
};
