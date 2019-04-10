function xhrPromise(URL){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', URL, true)
        xhr.onload = function(){
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(xhr.statusTExt));
            }
        }
        xhr.onerror = function(){
            reject(new Error(xhr.status));
        }
        xhr.send();
    })
}
var url = 'http://www.baidu.com'
xhrPromise(url).then(function onFulfilled(value){
    console.log(value)
}).catch(function(error){
    console.error(error);
})