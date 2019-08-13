// ie9之前基于ActiveX
var element = xmldom.documentElement.selectSingleNode('employee/name');
if (element !== null) {
  console.log(element.xml);
}
var elements = xmldom.documentElement.selectNodes('employee/name');
console.log(elements.length);
// NodeList 返回 , 动态变化

// DOM XPath 命名空间对XML文档求值
xmldom.setProperty('SelectionNamespaces', 'xmlns:wrox="http://www.wrox.com/"');
var result = xmldom.documentElement.selectNodes('wrox:book/wrox:author');
console.log(result.length);