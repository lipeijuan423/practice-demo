
// 节流 当调用动作n毫秒后，才会执行该动作，若在这n毫秒内又调用此动作则将重新计算执行时间
function throttle(fn, gaptime) {
    if (gaptime === null || gaptime === undefined) {
        gaptime = 1500
    }
    let _lastTime = null;
    return function(){
        let _nowTime = + new Date();
        if (_nowTime - _lastTime > gaptime || !_lastTime) {
            fn.apply(this, arguments);
            _lastTime = _nowTime;
        }
    }
}
// 防抖动
// 网上
var debounce = function (idle, action) {
    var last
    return function () {
        var ctx = this, args = arguments
        clearTimeout(last)
        last = setTimeout(function () {
            action.apply(ctx, args)
        }, idle)
    }
}
// self
function debounce (fn, wait) {
    let timeout = null;
    return function(){
        if (timeout !== null) {
            clearTimeout(timeout);
        } else {
            timeout = setTimeout(fn, wait);
        }
    }
}
window.addEventListener('scroll', throttle(fn, 500));