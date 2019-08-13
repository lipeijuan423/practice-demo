/* 
  * 代替闭包的(function(){}())
*/
var jsModule = function (vip) {
  var Yvip = document.getElementById('vip');
  var YQ: any;
  YQ = '123'; // 外部不能直接调用
  return {
    add: function (t) {
      if (t> 12) {
        var Yv = t;
        Yvip.innerHTML = '年费' + YQ;
      } else {
        var Mv = t;
        Yvip.innerHTML = "月费";
      }
    }
  }
}
// var vm = new jsModule("vip"); // ？ 报错
var vm = new (jsModule as any)("vip");
vm.add(12);