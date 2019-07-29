var Disposable = /** @class */ (function () {
    function Disposable() {
    }
    Disposable.prototype.dispose = function () { this.inDisabled = true; };
    return Disposable;
}());
var Activetable = /** @class */ (function () {
    function Activetable() {
    }
    Activetable.prototype.activate = function () { this.isActive = true; };
    ;
    return Activetable;
}());
var SmartObject = /** @class */ (function () {
    function SmartObject() {
        this.isDisposed = false;
        this.isActive = false;
    }
    SmartObject.prototype.interact = function () { this.activate(); };
    return SmartObject;
}());
applyMixins(SmartObject, [Disposable, Activetable]);
var smartObj = new SmartObject();
setTimeout(function () { return smartObj.interact(); }, 1000);
// 最后，把mixins混入定义的类，完成全部实现部分
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
