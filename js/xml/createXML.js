// 创建新的文档为root的XML文档
var xmldom = document.implementation.createDocument('', 'root', null);
var child = xmldom.createElement("child");
xmldom.documentElement.appendChild(child);
// 浏览器是否支持DOM2的xml
var hasXmldom = document.implementation.hasFeature('XML', '2.0');
// 解析xml
var parser = new DOMParser();
var xmlDom = parser.parseFromString('<root><child/></root>', 'text/xml');
console.log(xmlDom.documentElement.tagName);
console.log(xmlDom.documentElement.firstChild.tagName);
var anotherChild = document.createElement('child');
xmlDom.documentElement.appendChild(anotherChild);
var children = xmlDom.getElementsByTagName('child');
console.log(children);