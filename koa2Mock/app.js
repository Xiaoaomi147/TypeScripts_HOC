const Koa = require('koa');
const bodyParser = require('koa-bodyparser'); //koa2获取参数的方法
const session = require('koa-session'); //提供session操作
const chalk = require('chalk'); //提供字体颜色

const mongoose = require('mongoose');

const CONFIG = require('./config/config');

const Routes =  require('./router/index');

const app = new Koa();

mongoose.connect( CONFIG.mongodb, CONFIG.options );  //连接数据库 地址和验证信息
const db = mongoose.connection;
const success = chalk.bold.green;
const error = chalk.bold.red;
db.once('open',()=>{
    console.log(success('数据库连接成功'));
});
db.on('error',()=>{
    console.log(error('数据库连接失败'));
});

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
