// 模块依赖加载器/管理器 封装
// 为模块的定义引入包装函数
var MyModules = (function Manager(){
  var modules = {}
  function define(name, deps, impl){
    for(var i = 0; i < deps.length; i++){
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl, deps);
  }
  function get(name){
    return modules[name]
  }
  return {
    define: define,
    get: get
  }
})()
// 定义模块
MyModules.define('bar', [], function(){
  function hello(who){
    return who
  }
  return {
    hello: hello
  }
})
MyModules.define('foo', ['bar'], function(bar){
  var hungry = 'hippo';
  function awesome () {
    console.log(bar.hello(hungry).toUpperCase());
  }
  return {
    awesome: awesome
  }
})
var bar = MyModules.get('bar');
var foo = MyModules.get('foo');
bar.hello('hippo');
foo.awesome();