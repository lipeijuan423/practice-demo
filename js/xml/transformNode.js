// transformNode 返回一个包含转换信息的字符串
xmldom.load('employees.xml');
xmldom.load('employees.xslt');
var result = xmldom.transformNode(xsltdom);
// 任何节点
var result02 = xmldom.documentElement.transformNode(xsltdom);