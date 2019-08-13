// 跨浏览器编写
function parseXml (xml) {
  var xmldom = null;
  if (typeof DOMParser != 'undefined') {
    xmldom = (new DOMParser()).parseFromString(xml, 'text/xml');
    var errors = xmldom.getElementsByTagName('parsererror');
    if (errors.length) {
      throw new Error('XML parsing error'+error[0].textContent);
    }
  } else if (typeof ActiveXObject != 'undefined') {
    xmldom = createDocument();
    xmldom.loadXML(xml);
    if (xmldom.parseError != 0) {
      throw new Error('xmll parsing error'+xmldom.parseError.reason);
    }
  } else {
    throw new Error('no xml parser available');
  }
  return xmldom;
}
// 调用
var xmldom = null;
try {
  xmldom = parseXml('<root><child/></root>')
} catch (error) {
  alert(error.message);
}
// 序列化xml
function serializeXml(xmldom){
  if (typeof XMLSerializer != 'undefined') {
    return (new XMLSerializer()).serializeToString(xmldom);
  } else if (typeof xmldom.xml != 'undefined') {
    return xmldom.xml;
  } else {
    throw new Error('Could not serialize XML DOM');
  }
}