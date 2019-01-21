// 内部机制是通过判断对象的原型链是不是能找到类型的prototype
function instanceof (left, right) {
  let prototype = right.prototype;
  left = left.__proto__
  while (true) {
    if (left === null) {
      return false;
    }
    if (prototype === left) {
      return true;
    }
    left = left.__proto__;
  }
}