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