// 将XSLT加载到线程安全的XML文档
// 自由线程dom文档
function CreateThreadSafeDocument () {
  if (typeof arguments.callee.activeXString != 'string') {
    var version = ['MSXML2.FreeThreadedDOMDocument.6.0',
                    'MSXML2.FreeThreadedDOMDocument.3.0',
                    'MSXML2.FreeThreadedDOMDocument'],
        i,
        len;
    for (i = 0, len = veriosn.length; i < len; i++) {
      try {
        new ActiveXObject(version[i]);
        arguments.callee.activeXString = version[i];
      } catch (error) {
        
      }
      
    }
    return new ActiveXObject(arguments.callee.activeXString);
  }
}
var xsltdom = CreateThreadSafeDocument();
xsltdom.async = false;
xsltdom.load('employees.xslt');
// 转换XML文档
function createXSLTemplate () {
  if (typeof arguments.callee.activeXString != 'string') {
    var versions = ['MSXML2.XSLTemplate.6.0',
                    'MSXML2.XSLTemplate.3.0',
                    'MSXML2.XSLTemplate'],
                  i, len;
    for (i = 0, len = versions.length; i < len; i++) {
      try {
        new ActiveXObject(versions[i]);
        arguments.callee.activeXString = versions[i];
      } catch (error) {
        
      }
      
    }
    return new ActiveXObject(arguments.callee.activeXString);
  }
}
var template = createXSLTemplate();
template.stylesheet = xsltdom;

var processor = template.createProcessor();
processor.input = xmldom;
processor.transform();

var result = processor.output;


