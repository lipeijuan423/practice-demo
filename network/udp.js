// 创建UDP服务端
var dgram = require('dgram');
// 创建server对象
var server = dgram.createSocket('udp4');
// 接到消息时，触发该事件，携带的数据为消息buffer和远程地址信息对象
server.on('message', function (msg, rinfo) {
  console.log(msg)
  console.log(rinfo)
});
// 绑定端口之后启动监听时间
server.on('listening', function () {
  var address = server.address();
  console.log(address);
});
// 绑定端口
server.bind(41234);
// 创建UDP客户端
var message = new Buffer('hello');
var client = dgram.createSocket('udp4');
client.send(message, 0, message.length, 41234, 'localhost', function (err, bytes) {
  client.close();
})