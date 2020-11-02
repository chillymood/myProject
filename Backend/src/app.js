const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const cors = require("koa2-cors");
const session = require("koa-generic-session");

const index = require("./routes/index");
const users = require("./routes/users");
const comment = require("./routes/comment");

// error handler
onerror(app);

// 服務端支持跨域
// app.use(
//   cors({
//     origin: "http://localhost:3000", //支持前端哪個域，可以跨域
//     credential: true, //允许跨域的时候带着 cookie
//   })
// );

app.use(
  cors({
    origin: ["http://35.229.221.230"],
    // exposeHeaders: ["www-Authenticate", "Server-Authorization"],
    credentials: true,
    allowMethods: ["GET", "POST", "DELETE"],
    // allowHeaders: ["Content-Type"/*, "Authorization", "Accept"*/],
  })
);

//配置SESSION
app.keys = ["dssUII^*123"]; //秘鑰
//自動配置了cookie 和 session
app.use(
  session({
    //配置cookie
    cookie: {
      path: "/", //cookie在根目錄下皆有效
      httpOnly: true, //cookie只允許服務端來操作
      maxAge: 24 * 60 * 60 * 1000, //一天  cook過期時間
    },
  })
);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes註冊路由
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(comment.routes(), comment.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
