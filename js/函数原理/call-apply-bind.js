function call(context){
  // context.fn = fn;
  // var argumentsArr = arguments.slice(1);
  // context.fn(...argumentsArr);
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(args);
  delete context.fn;
  return result;
}
function fn(a,b,c){
  console.log(this.a + this.b + this.c)
  return a+b+c;
}
var obj = {
  a: -1,
  b: -2,
  c: 0
}
fn.call(obj, 1,2,3)
function bind (context) {
  if (typeof _this !== 'function') {
    throw new TypeError('Error')
  }
  const _this = this;
  const args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) {
      return new _this(...args,...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
fn.bind(obj)(1,2,3)