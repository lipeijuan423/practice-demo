function test () {
    alert(2);
    return 'test fun';
};
Function.prototype.before = function (fn) {
    var __self = this;
    return function () {
        if (fn.apply(this, arguments) == false) {
            return false
        }
        return __self.apply(__self, arguments);
    }
}
Function.prototype.after = function (fn) {
    var __self = this;
    return function () {
        var result = __self.apply(__self, arguments);
        if (result == false) {
            return false;
        }
        fn.apply(__self, arguments);
        return result;
    }
}
test.before(function () {
    alert(1);
    return false;
}).after(function () {
    alert(3);
})()