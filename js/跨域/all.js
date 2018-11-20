/* 
    * CORS => withCredentials   主流
    * img 没太用
    * JSONP jquery请求有，
    * Comet 使用实时更新 股票，体育分数等
*/
var img = new Image();
img.onload = function (){
    console.log('完成');
}
img.src = 'http://www.example.com/test?name=Nicholas';
// JSONP
function  handleResponse(response) {
    console.log('返回的数据' + response);
}
var script = document.createElement('script');
script.src = 'http://www.example.php?callback=handleResponse';
document.body.insertBefore(script, document.body.firstChild);
// comet
// XHR对象实现HTTP流
function createStreamingClient(url, progress, finished){
    var xhr = new XMLHttpRequest(),
        received = 0;
    xhr.open('get', url, true);
    xhr.onreadystatechange = function(){
        var result;
        if (xhr.readyState === 3) {
            result = xhr.responseText.substring(received);
            received += result.length;
            progress(received);
        } else if (xhr.readyState === 4) {
            finished(xhr.responseText);
        }
    }
    xhr.send(null);
    return xhr;
}
var client = createStreamingClient('xxx.php', function(data){
    alert(data);
},function(data) {
    alert(data);
});
// xxx.php
/* <?php 
    $i = 0;
    while(true){
        echo 'number is $i';
        flush();
        sleep(10);
        $i++;
    }
?> */
