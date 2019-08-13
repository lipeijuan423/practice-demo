// function Hello<T>(arg:T):T{
//   return arg;
// }
// lamda 
/* 
  * 第一个string是返回值
  * var myFunc:(a:number)=>string = function (a:number):string {
     return 'result';
  }
*/
// var myHello:<K>(arg:K) => K = Hello;
// var myHello:{<T>(arg:T):T} = Hello;
// alert(myHello("hello"));

// 接口 - 泛型： 声明不指定类型， 使用才选择类型
// interface HelloT{
//   <T>(arg:T):T;
// }
// function myHelloT<T>(arg:T):T{
//   return arg;
// }
// var MHT:HelloT = myHelloT;
// alert(MHT<string>("hello T"));

// interface HelloT2<T>{
//   (arg:T):T;
// }
// function myHelloT2<T>(arg: T): T {
//   return arg;
// }
// var mh:HelloT2<number> = myHelloT2;
// alert(mh(0))

// 类
class HelloNumber<T> {
  Ten:T;
  add:(x:T, y:T) => T;
}
var myHelloNumber = new HelloNumber<number>();
myHelloNumber.Ten = 10;
myHelloNumber.add = function (x, y) {
  return x+y;
}
alert(myHelloNumber.Ten)