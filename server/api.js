const Koa = require('koa');
const app = new Koa();
const bodyparser = require("koa-bodyparser");
// 配置所有接口的请求前缀是api
const router = require("koa-router")({ prefix: "/api" });
// 设置cookie加密秘钥
app.keys = ["some secret", "another secret"];
// 一些mock 数据
const goods = [
    { id: 1, text: "连衣裙", price: 580 }, { id: 2, text: "衬衣", price: 320 },{ id: 3, text: "睡裙", price: 260 }
];
router.get("/goods", ctx => {
    ctx.body = {
        ok: 1,
        goods
    };
});
router.get("/detail", ctx => {
    ctx.body = {
        ok: 1,
        data: goods.find(good => good.id == ctx.query.id)
    };
});
router.post("/login", ctx => {
    const user = ctx.request.body;
    if (user.username === "admin" && user.password === "123456") {
        // 将token存入cookie
        const token = 'a mock token'; 
        ctx.cookies.set('token', token, { 
            httpOnly: false ,
            expires:new Date('2029-2-12'), // cookie失效时间
            maxAge:1000*60*60*24, 
        }); 
        ctx.body = { ok: 1, token };
    } else {
        ctx.body = { ok: 0 };
    }
});
// 解析post数据并注册路由 
app.use(bodyparser());
app.use(router.routes());
app.listen(8080, () => console.log('服务已启动'))