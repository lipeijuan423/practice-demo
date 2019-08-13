// 计算当前元素在页面上的偏移量
function getElementLeft (element) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}
function getElementTop (element) {
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}
// 页面相对视口位置 -- arguments.callee严格模式下不能使用
/* 
    * arguments.callee 指向当前执行的函数
    * argumnets.callee.caller 函数对象返回的一个函数引用
    function fun1(){
        console.log(arguments.callee.caller);
    }
    function fun2(){
        fun1();
    }
    fun1();
    fun2();
    caller是function对象的一个属性用于返回一个function引用、它返回调用它的function对象、若直接在全局环境下调用fun1 则返回null、在fun2里调用之后返回fun2、
*/
function getBoundingClientRect (element) {
    var scrollTop = document.documentElement.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft;
    if (element.getBoundingClientRect) {
        // 检测属性，没有就自定义
        if (typeof arguments.callee.offset != 'number') {
            var temp = document.createElement('div');
            temp.style.cssText = 'position: absolute;top:0;left:0;';
            document.body.appendChild(temp);
            arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;
            document.body.removeChild(temp);
            temp = null;
        }
        var rect = element.getBoundingClientRect();
        var offset = arguments.callee.offset;
        return {
            top: rect.top + offset,
            bottom: rect.bottom + offset,
            left: rect.left + offset,
            right: rect.right + offset
        }
    } else {
        var actualLeft = getElementLeft(element);
        var actualTop = getElementTop(element);
        return {
            top: actualTop - scrollTop,
            bottom: actualTop + element.offsetHeight - scrollTop,
            left: actualLeft - scrollLeft,
            right: actualLeft + element.offsetWidth - scrollLeft
        }
    }
}
