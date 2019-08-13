function selectionSingleNode(context, expression, namespaces){
  var doc = (context.nodeType != 9 ? context.ownerDocument : context);
  if (typeof doc.evaluate != 'undefined') {
    var nsresolver = null;
    if (namespaces instanceof Object) {
      nsresolver = function (prefix){
        return namespaces(prefix);
      };
    }
    var result = doc.evaluate(expression, context, nsresolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return (result !== null ? result.singleNodeValue : null);
  } else if (typeof context.selectionSingleNode != 'undefined') {
    if (namespaces instanceof Object) {
      var ns = '';
      for (var prefix in namespaces) {
        if (namespaces.hasOwnProperty(prefix)) {
          ns += 'xmlns:' + prefix + '="' + namespaces[prefix] + '"';
        }
      }
      doc.setProperty("SelectionNamespaces", ns);
    }
    return context.selectionSingleNode(expression);
  } else {
    throw new Error('No XPath engine found');
  }
}
var result = selectionSingleNode(xmldom.docuemntElement, 'wrox:book/wrox:author', {wrox: 'http://www.wrox.com/'});
console.log(serializeXml(result));