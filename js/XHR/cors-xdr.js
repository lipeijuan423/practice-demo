// ie对cors的实现
var xdr = new XDomainRequest();
// 请求成功
xdr.onload = function () {
    alert(xdr.responseText)
}
// 请求失败
xdr.onerror = function () {
    alert('error');
}
// 超时调用
xdr.timeout = 1000;
xdr.ontimeout = function(){
    alert('request took to long')
}
xdr.open('get', 'example.php');
xdr.send(null);
// 终止请求
xdr.abort();
// post请求
xdr.open('post', 'http://xxx.com/');
xdr.contentType = 'application/x-www-form-urlencoded';
xdr.send('name1=value1&&name2=value2');
// 其他浏览器
var xhr = new XMLHttpRequest();
/*  */
// 请求地址为绝对值
xhr.open('post', 'http://xxx.com/')
/* 所有浏览器都支持的CORS */
function createCORSRequest (method, url) {
    var xhr = new XMLHttpRequest();
    if ('withCredentials' in xhr) {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != 'undefined') {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}
var request = createCORSRequest('get', 'http://xxx.com/');
if (request) {
    request.onload = function () {
        console.log('成功请求');
    }
    request.onerror = function () {
        console.log('失败请求');
    }
    request.send();
}