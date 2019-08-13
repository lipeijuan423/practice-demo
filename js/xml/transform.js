// 跨浏览器 xslt转换 只是返回结果字符串
// 参数: 执行上下文节点和XSLT文档对象
function transform (context, xslt) {
  if (typeof XSLTProcessor != 'undefined') {
    var processor = new XSLTProcessor();
    processor.importStylesheet(xslt);
    var result = processor.transformToDocument(context);
    return (new XMLSerializer()).serializeToString(result);
  } else if (typeof context.transformNode != 'undefined') {
    return context.transformNode(xslt);
  } else {
    throw new Error('NO XSLT processor available')
  }
}