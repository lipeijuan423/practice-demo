// 使用闭包 返回一个函数
function curry(fn){
    var args = Array.prototype.slice.call(arguments, 1);
    return function (){
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(null, finalArgs);
    }
}
function add(num1, num2) {
    return num1 + num2;
}
var curriedAdd = curry(add, 3);
curriedAdd(5);
/* bind模拟 */
function bind(fn, context){
    var args = Array.prototype.slice.call(arguments, 2);
    return function () {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(context, finalArgs);
    }
}
var hanler = {
    message: 'xxx-df',
    handleClick: function(name, event) {
        console.log(this.message + name + event.type);
    }
}
// 绑定
btn.addEventListener('click', bind(handler.handleClick, handler, 'my-btn'));