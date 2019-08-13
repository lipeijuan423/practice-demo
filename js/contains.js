/* 检查包含子节点 */
function contains (refNode, otherNode) {
    // 结合浏览器检测及能力检测
    if (typeof refNode.contains === 'function' && (!client.engine.webkit || client.engine.webkit >= 522)) {
        return refNode.contains(otherNode)
    } else if (typeof refNode.compareDocumentPosition === 'function') {
        // 16表示包含 按位与
        return !((refNode.compareDocumentPosition(otherNode) & 16));
    } else {
        var node = otherNode.parentNode;
        do {
            if (node === refNode) {
                return true;
            } else {
                node = node.parentNode;
            }
        }while(node !== null)
        return false;
    }
}