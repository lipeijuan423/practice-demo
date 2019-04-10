// 状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
function Promise (testFn) {
  var onFulfilledCallbakes = []
  var onRejectCallbacks = []
  var _this = this
  _this.status = PENDING
  // 没有考虑到
  _this.value = ''
  _this.reason = ''
  // 返回的是对象
  var resolve = function (value) {
    // ns -- 怎么复现这种情况？
    if (value instanceof Promise) { 
      return value.then(resolve, reject);
    }
    // 需要异步 ns
    setTimeout(function () {
      if (_this.status === 'pending') {
        _this.status = FULFILLED
        _this.value = value // ns 调用的时候更新值
        // value值类型会不同
        onFulfilledCallbakes.forEach(item => {
          // value值会变
          console.log(item(_this.value), '成功执行')
        })
      }
    })
  }
  var reject = function (reason) {
    // ns 需要异步
    setTimeout(() => {
      if (_this.status === 'pending') {
        _this.status = REJECTED
        // ns 调用更新value
        _this.reason = reason
        onRejectCallbacks.forEach(item => {
          console.log(item(_this.reason), '失败执行')
        })
      }
    })
  }
  // promise对象默认有两个函数
  // ns 错误执行的情况
  try {
    testFn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
function resolvePromise(promise2, x, resolve, reject){
  if (promise2 === x) {
    return reject(new TypeError('循环引用'));
  }
  let called = false;
  if (x instanceof Promise) {
    if (x.status === PENDING) {
      x.then(y => {
        resolvePromise(promise2, y, resolve, reject);
      }, reason => {
        reject(reason);
      })
    } else{
      x.then(resolve, reject);  
    } 
  } else if (x !== null && (typeof x === 'object' || typeof x === 'fucntion')) {
    try{
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x,y => {
          if(called) return ;
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        })
      } else {
        resolve(x);
      }
    } catch (e) {
      if(called) return ;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}
Promise.prototype.then = function (onFulfilled, onRejected) {
  // ns 没有函数的情况，会添加默认函数
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (value) {
    return value;
  }
  onRejected = typeof onRejected === 'function' ? onRejected : function (err) {
    throw err;
  }
  let promise2;
  // 谁引用
  let _this = this;
  // 也是promise对象
  if (_this.status === 'pending') {
    // onFulfilledCallbakes.push(resolved)
    // onRejectCallbacks.push(rejected)
    promise2 = new Promise((resolve, reject) => {
      _this.onFulfilledCallbakes.push(value => {
        try {
          let x = onFulfilled(value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
      _this.onRejectCallbacks.push(reason => {
        try {
          let x = onRejected(reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      })
    })
  }
  // 以相同的值执行
  if (_this.status === 'fulfilled') {
    promise2 = new Promise(function (resolve, reject) {
      setTimeout(function(){
        try {
          let x = onFulfilled(_this.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      },0)
    })
  }
  if (_this.status === 'rejected') {
    promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          let x = onRejected(_this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      })
    })
  }
  // 链式操作
  return promise2;
}
Promise.prototype.catch = function (fn) {
  return this.then(resolve, reject);
}
Promise.prototype.resovle = function (value) {
  return new Promise(resolve => {
    resolve(value);
  })
}
Promise.prototype.reject = function (value) {
  return new Promise((resolve, reject) => {
    reject(value);
  })
}
function gen (length, resolve) {
  let count = 0;
  let values = [];
  return function(i, value){
    values[i] = value;
    if (++count === length) {
      resolve(values);
    }
  }
}
Promise.prototype.all = function (promises) {
  return new Promise((resolve, reject) => {
    let done = gen(promise.length, resolve);
    promises.forEach((promise, index) => {
      promise.then(value => {
        done(index, value);
      }, reject)
    })
  })
}
Promise.prototype.race = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      promise.then(resolve, reject);
    })
  })
}
Promise.prototype.deferred = function () {
  let defer ={};
  defer.promise = new Promise((resolve, reject) => {
    defer.resolve = resolve;
    defer.reject = reject;
  });
  return defer;
}
var promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    var random = Math.random();
    if (random > 0.5) {
      resolve('success')
    } else {
      reject('failed')
    }
  })
})
promise.then(
  function (value) { 
    console.log(value, 'then 值')
  }, 
  function (value) { 
    console.log(value, 'then 值')
  }
)