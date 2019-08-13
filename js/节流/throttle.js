// 基本形式
var processor = {
    timeoutId: null,
    performProcessing: function(){},
    process: function () {
        clearTimeout(this.timeoutId);
        var that = this;
        this.timeoutId = setTimeout(() => {
            that.performProcessing();
        }, 100);
    }
}
processor.process();
// 函数写法
function throttle (method, context) {
    clearTimeout(method.tid);
    method.tid = setTimeout(() => {
        method.call(context);
    }, 100);
}
function throttle(fn, interval = 300) {
    let canRun = true;
    return function () {
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            canRun = true;
        }, interval);
    };
}