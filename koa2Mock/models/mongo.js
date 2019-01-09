const mongoose = require('mongoose');

const url = 'mongodb://198.181.36.251:27017/test';
const db = mongoose.createConnection( url );
const chalk = require('chalk');
const success = chalk.bold.green;
const error = chalk.bold.red;

db.once('open',(callback)=>{
    console.log(success('数据库连接成功'));
});

db.on('error',(callback)=>{
    console.log(error('数据库连接失败'));
});

module.exports = db;
