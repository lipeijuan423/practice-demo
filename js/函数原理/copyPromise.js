var promise = this;
var Promise = function (resolverFun) {
  promise._status = 'PENDING';
  promise._value;
  promise._reject;
  promise._resolves = [];
  promise._rejects = [];
  var resolve = function (value) {
    // 保证在then加入后，再执行
    setTimeout(() => {
      // 必须是promise
      promise._status = 'FULFILLED';
      promise._value = value;
      // 不对
      promise._resolves.forEach(resolveItem => {
        // 更新值
        console.log(resolveItem(value), '值')
        value = resolveItem(value) || value
      })
    }, 0);
  }
  resolverFun(resolve)
}
Promise.prototype.then = function(onFulfilled, onReject){
//  onFulfilled(promise._value)
  promise._resolves.push(onFulfilled)
  // 链式
  console.log(onFulfilled, 'then中链式')
 return this;
}
var promise01 = new Promise((resolve) => {
  resolve(1)
})
promise01.then((value) => {
  console.log(value, 'then1')
  return 2;
}).then((value) => {
  console.log(value, 'then2')
})