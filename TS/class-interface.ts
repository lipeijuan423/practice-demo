class Disposable {
  inDisabled: boolean;
  dispose(){this.inDisabled = true;}
}
class Activetable {
  isActive: boolean;
  activate () {this.isActive = true;};
  deactivate: (d:Date) => {};
}
class SmartObject implements Disposable, Activetable {
  constructor () {}
  interact () {this.activate();}
  isDisposed: boolean = false;
  dispose: () => void;
  isActive: boolean = false;
  activate: () => void;
  deactivate: (d: Date) => {
    
  }
}
applyMixins(SmartObject, [Disposable, Activetable]);
let smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);

// 最后，把mixins混入定义的类，完成全部实现部分
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}
