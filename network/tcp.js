// 1.1服务器事件
var net = require('net');
var server = net.createServer(function (socket) {
  // 开始新连接
  socket.on('data', function (data) {
    socket.write('hello');
  })

  // 断开连接
  socket.on('end', function () {
    console.log('断开连接');
  })
})
// 1.2连接事件
server.listen(8124, function () {
  console.log('server start listen port 8124 !');
});
var client = net.connect({ port: 8124 }, function () {
  console.log('client connected !');
  client.write('hello');
})

client.on('data', function (data) {
  console.log(data);
  client.end();
})

client.on('end', function () {
  console.log('此连接结束');
})