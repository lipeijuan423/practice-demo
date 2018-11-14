// 处理命名空间
var nsresolver = xmldom.createNSResolver(xmldom.documentElement);
var result = xmldom.evaluate('wxox:book/wrox:author', smldom.documentElement, nsresolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
console.log(result.snaopshotLength);
// 定义一个返回函数的信息
var nsresolver = function (prefix) {
  switch (prefix) {
    case value:
      case 'wrox': return 'http://www.wrox.com/';
    default:
      break;
  }
  var result02 = xmldom.evaluate('count(wrox:book/worx:author)', xmldom.documentElement, nsresolver, XPathResult.NUMBER_TYPE, null);
  console.log(result.numberValue);
}