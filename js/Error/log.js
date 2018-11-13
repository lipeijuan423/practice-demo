function log(message) {
    if (typeof console == 'object') {
        console.log(message)
    } else if (typeof opera == 'object') {
        opera.postError(message)
    } else if (typeof java == 'object' && typeof java.lang == 'object') {
        java.lang.System.out.println(message);
    }
}
// 使用于不支持javascript控制台的浏览器
function pagelog(message){
    var console = document.getElementById('debuginfo');
    if (console == null) {
        console = document.createElement('div');
        console.id = 'debuginfo';
        console.style.background = '#dedede';
        console.style.border = '1px solid #dedede';
        console.style.padding = '5px';
        console.style.position = 'absolute';
        console.style.top = '0';
        console.style.right = '0';
        console.style.width = '200px';
        document.body.appendChild(console);
    }
    console.innerHTML += '<p>' + message + '</p>'
}
// 自定义抛出错误
function assert(condition, message){
    if (!condition) {
        throw new Error(message);
    }
}
function divide(num1, num2){
    assert(typeof num1 == 'number' && typeof num2 == 'number', 'divide():Both arguments must be number');
    return num1/num2;
}