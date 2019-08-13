function selectionSingleNode(context, expression, namespaces) {
  var doc = (context.nodeType != 9 ? context.ownerDocument : context);
  if (typeof doc.evaluate != 'undefined') {
    var nsresolver = null;
    if (namespaces instanceof Object) {
      nsresolver = function (prefix) {
        return namespaces(prefix);
      };
    }
    var result = doc.evaluate(expression, context, nsresolver, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    var nodes = new Array();
    if (result !== null) {
      for (let i = 0, len = result.snapshotLength; i < len; i++) {
        nodes.push(result.snapshotItem(i));
      }
    }
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
    var result = context.selectNodes(expression);
    var nodes = new Array();
    for (let i = 0, len = result.length; i < len; i++) {
      nodes.push(result[i]);      
    }
    return nodes;
  } else {
    throw new Error('No XPath engine found');
  }
}
var result = selectionSingleNode(xmldom.docuemntElement, 'wrox:book/wrox:author', { wrox: 'http://www.wrox.com/' });
console.log(serializeXml(result));