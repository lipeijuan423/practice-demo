function Promise (fn) {
  // 状态
  var value = null,
      promise = this;
      promise._resolves = [];

  function resolve (value) {
    setTimeout(() => {
      promise._resolves.forEach(function (cb) {
        cb(value);
      })
    }, 0);
  }
  function reject () {

  }

  fn(resolve, reject);
}
Promise.prototype.then = function (onFulfilled, onRejected) {
  var promise = this;
  return new Promise((resolve, reject) => {
    promise._resolves.push(onFulfilled);
  });
}

new Promise(function(resolve, reject){
  resolve(1);
}).then(val => {
  console.log(val, 'then')
})

