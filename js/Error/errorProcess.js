function process (values) {
    if (!(values instanceof Array)) {
        throw new Error('process: Argument must an array')
    }
    values.sort();
    for (let i = 0; i < values.length; i++) {
        if (values[i] > 100) {
            return values[i];
        }
    }
    return -1;
}
// 对地址编码
function addQueryStringArg(url, name, value){
    if (url.indexof('?') === -1) {
        url += '?';
    } else {
        url += '&';
    }
    url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
    return url;
}
var url = 'http://www.somedomain.com';
var newUrl = addQueryStringArg(url, 'redir', 'http://www.someotherdomain.com');
alert(newUrl);
// http://www.somedomain.com?redir=http://www.someotherdomain.com