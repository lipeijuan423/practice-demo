function chunk (array, process, context) {
    setTimeout(() => {
        var item = array.shift();
        // 处理函数
        process.call(context, item);
        if (array.length > 0) {
            setTimeout(arguments.callee, 100);
        }
    }, 100);
}
var data = [1,3,,45,5];
function printValue(item){
    var div = document.getElementById('div');
    div.innerHTML = item+'<br>'
}
chunk(data, printValue);
// 不改变原数组
chunk(data.concat(), printValue);