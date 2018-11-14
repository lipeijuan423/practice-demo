//XPath表达式 上下文 命名空间求解器 返回结果类型 保存结果XPathResult对象
var result = xmldom.evaluate("employee/name", xmldom.documentElement, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
if (result !== null) {
  var element = result.iterateNext();
  while (element) {
    console.log(element.tagName);
    node = result.iterateNext();
  }
}
// 快照结果类型
var result02 = xmldom.evaluate('employee/name', xmldom.documentElement, null, XPAthResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
if (result02 !== null) {
  for (let i = 0, len = result.snapshotLength; i < len.length; i++) {
    alert(result.snapshotItem(i).tagName);
  }
}
// 单节点结果
var firstResult = xmldom.evaluate('employee/name', xmldom.documentElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
if (result !== null) {
  console.log(result.singleNodeValue.tagName);
}
// 简单类型结果
// 匹配即诶单‘employee/name’
var booleanResult = xmldom.evaluate('employee/name', xmldom.documentElement, null, XPathResult.BOOLEAN_TYPE, null);
console.log(booleanResult.booleanValue);
// 计算给定模式匹配的所有节点数量 数值类型
var countResult = xmldom.evaluate('count(employee/name)', xmldom.documentElement, null, XPathResult.NUMBER_TYPE, null);
console.log(countResult.numberValue);
// 字符串类型
var stringResult = xmldom.evaluate('employee/name', xmldom.documentElement, null, XPathResult.STRING_TYPE, null);
console.log(stringResult.stringValue);
// 默认类型 需要判断
var defaultResult = xmldom.evaluate('employee/name', xmldom.documentElement, null, XPathResult.ANY_TYPE, null);
if (result !== null) {
  switch (result.resultType) {
    case XPathResult.STRING_TYPE:
      break;
    case XPathResult.NUMBER_TYPE:
      break;
    case XPathResult.BOOLEAN_TYPE:
      break;
    case XPathResult.UNORDERED_NODE_ITERATOR_TYPE:
    // 处理次序不一的节点迭代器类型
      break;
    default:
      break;
  }
}