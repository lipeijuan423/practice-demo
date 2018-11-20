/* 
    websocket服务器
    双通信
*/
var socket = new WebSocket('ws://www.example.com/server.php');
socket.send('hello world');