//連接mongodb數據庫服務
const mongoose = require("mongoose");
//本地
// const url = "mongodb://localhost:27017"

const url = "mongodb+srv://chillymood:12241224@cluster0.ciwzh.mongodb.net/comment3?retryWrites=true";
//&w=majority
const dbName = "comment3";

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

// 開始連接
mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



//獲取連接對象
const conn = mongoose.connection;

conn.on("error", (err) => {
  console.error("mongodb連接出錯", err);
});

module.exports = mongoose;
