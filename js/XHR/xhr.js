var xhr = createXHR();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status <=300 || xhr.status === 304) {
            console.log(xhr.responseText);
        } else {
            console.log('unsuccessful:' + xhr.status);
        }
    }
}
// 数据类型 请求的url地址 是否同步
xhr.open('get', 'example.txt', true);
// 请求主体发送的数据
xhr.send(null);
/* 
    提交表单
*/
xhr.open('post', 'postexample.php', true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
var form = document.getElementById('user-info');
//  表单数据序列化
xhr.send(serialize(form));