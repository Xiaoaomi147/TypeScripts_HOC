const Koa = require('koa');
const app = new Koa();
const server = require('http').Server(app.callback());
const io = require('socket.io')(server);
const port = 8082;

server.listen(process.env.PORT || port, () => {
     console.log(`app run at : http://127.0.0.1:${port}`);
})

io.on('connection', socket => {
     console.log('初始化成功！下面可以用socket绑定事件和触发事件了');
     socket.on('send', data => {
          console.log('客户端发送的内容：', data);
          socket.emit('getMsg', '我是返回的消息... ...');
     })
     
     socket.on('werty',()=>{
          socket.emit('emittime', { time: '开始测速',timeout: Date.now() })
     })

     socket.on('gettime',( {timeout} = data )=>{
     let d1 = Date.now();7

     setTimeout(() => {
          socket.emit('emittime', { time: `${d1 - timeout}ms`, timeout: Date.now() })
      }, 2000)

     })
     
})