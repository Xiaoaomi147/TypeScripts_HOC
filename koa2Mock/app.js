const Koa = require('koa');
const bodyParser = require('koa-bodyparser'); //koa2获取参数的方法
const session = require('koa-session'); //提供session操作

const mongoose = require('mongoose');
const redis = require('./models/redis')
const CONFIG = require('./config/config');

const Routes =  require('./router/index');
const socket = require('./models/websocket');
const app = new Koa();
const mongoUrl = `mongodb://${CONFIG.mongoHost}:${CONFIG.mongoPort}/${CONFIG.mongoDatabase}`
mongoose.connect( mongoUrl, CONFIG.options );  //连接数据库 地址和验证信息
const db = mongoose.connection;
db.once('open',()=>{
    console.log('数据库连接成功');
});
db.on('error',()=>{
    // console.log('数据库连接失败');
});

redis;
socket;

app.use(bodyParser());

app.keys = ['somethings']

app.use(session({
    key: CONFIG.session.key,
    maxAge: CONFIG.session.maxAge
}, app))

Object.keys(Routes).forEach(function (key) {
    app.use(Routes[key].routes())
        .use(Routes[key].allowedMethods())
});

app.listen( CONFIG.port );
