// 创建一个只展示p 元素的节点迭代器
/* 对象 */
var filter = {
    acceptNode: function (node) {
        return node.tagName.toLowerCase === 'p' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
}
/* 函数也可以 */
var filter = function (node) {
    return node.tagName.toLowerCase === 'p' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
}
var iterator = document.createNodeIterator(root, NodeFilter.SHOW_ELEMENT, filter, false);