
// 事件
var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected() {
  console.log('connect调用');
}
eventEmitter.on('connection', connectHandler());
eventEmitter.emit('connection');
console.log('程序执行完毕');