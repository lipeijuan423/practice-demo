// 限于get请求
function jsonp (url, jsonpcallback, success) {
  let script = document.createElement('script');
  script.src = url;
  script.async = true;
  script.type = 'text/javascript';
  window[jsonpcallback] = function (data) {
    success && success(data)
  }
}
jsonp('http://xxx', 'callback', function (value){console.log(value)})