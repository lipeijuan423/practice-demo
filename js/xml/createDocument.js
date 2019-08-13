// ie8之前版本创建xml
function createDocument(){
  if (typeof arguments.callee.activeXString != 'string') {
    var versions = ['MSXML2.DOMDocument.6.0', 'MSXML2.DOMDocument.3.0', 'MSXML2.DOMDocument'],
        i, len;
      for (i = 0; i < versions.length; i++) {
        try {
          new ActiveXObject(versions[i]);
          arguments.callee.activeXString = versions[i];
          break;
        } catch (error) {
          
        }
      }
    return new ActiveXObject(arguments.callee.activeXString);
  }
}
// 同步加载xml
var xmldom = createDocument();
xmldom.async = false;
xmldom.load('./example.xml');
// xmldom.loadXML('<root><child/></root>')
if(xmldom.parseError !=0 ){

} else {
  alert(xmldom.documentElement.tagName);
  alert(xmldom.documentElement.firstChild.tagName);
  var anotherChild = xmldom.createElement('child');
  xmldom.documentElement.appendChild(anotherChild);
  var children = xmldom.getElementsByTagName('child');
  alert(child.length)
}
// 异步
var xmldomAsync = createDocument();
xmldomAsync.aysnc = true;
xmldom.onreadystatechange = function () {
  if (xmldomAsync.readyState == 4) {
    if (xmldomAsync.parseError != 0) {
      alert('error code' + xmldomAsync.parseError.errorCode + 'line:' + xmldomAsync.parseError.line + 'line pos' + xmldomAsync.parseError.linepos +
      'reason' + xmldom.parseError.reason);
    } else {
      alert(xmldom.documentElement.tagName);
      alert(xmldom.documentElement.firstChild.tagName);
      var anotherChild = xmldom.createElement('child');
      xmldom.documentElement.appendChild(anotherChild);
      var children = xmldom.getElementsByTagName('child');
      alert(child.length)
      alert(xmldomAsync.xml)
    }
  }
}
xmldomAsync.load('./example.xml')