var promise = new Promise(function(resolve, reject){

})
promise.then(onFulfilled, onRejected)
// 处理异常
promise.then(undefined, onRejected)
promise.catch(onRejected)
// 函数
function asyncFunction(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve('hello');
        }, 3000);
    })
}
asyncFunction().then(function(value){
    // 相互独立
    setTimeout(() => {
        console.log(value)
    }, 3000);
    // 给下个then传递参数
    return value;
}).then(function(value){
    console.log(value)
    console.log(12)
})
.catch(function(error){
    console.log(error)
})
// 快捷方式
// Promise.resolve(42)
new Promise(function(resolve){resolve(42)})
// .then指定方法调用是异步执行
var promise = new Promise(function(resolve, reject){
    resolve(1)
})
promise.then(function(value){console.log(value)})
console.log(222)
// 异步调用方式
function onReady (fn) {
    var readyState = document.readyState;
    if (readyState === 'interactive' || readyState === 'complate') {
        // 同步
        fn()
        // 异步
        setTimeout(fn, 0)
    } else {
        // 异步
        window.addEventListener('DOMContentLoaded', fn)
    }
}
function onReadyPromise () {
    return new Promise(function(resolve, reject){
        var readyState = document.readyState;
        if (readyState === 'interactive' || readyState === 'complate') {
            resolve()
        } else {
            window.addEventListener('DOMContentLoaded', resolve)
        }
    })
}
onReady(function(){
    console.log('dom fully loaded and parsed')
})
onReadyPromise().then(function(){
    console.log('dom fully loaded and parsed')
})
// ie8的catch问题： es3保留字不能作为对象的属性名使用
var promise = Promise.reject(new Error('message'))
promise['catch'](function(error){
    console.error(error)
})
promise.then(undefined, function(error){
    console.log(error)
})
var promisea = new Promise(function(resolve){resolve(100)})
promisea.then(function(value){return value*2})
promisea.then(function(value){return value*2})
promisea.then(function(value){return value*2})
promisea.then(function (value) { console.log(value)}) // 100
var promiseb = new Promise(function(resolve){resolve(100)})
promiseb
.then(function(value){return value*2})
.then(function(value){return value*3})
.then(function(value){console.log(value)}) // 600