
// 遍历某个元素所有的节点 或者 特定的一个节点
function nodeIterator (element) {
    var iterator = document.createNodeIterator(element, NodeFilter.SHOW_ELEMENT, null, false); // 最后一个参数是展示实体，html页面无用
    var node = iterator.nextNode();
    var array = []
    while(node != null){
        if (!array[node.tagName]) {
            array[node.tagName] = node.tagName
        }
        node = iterator.nextNode();
    }
}
nodeIterator(document.getElementById('juejin'))
// treeWalker 
// 遍历时可以移动方向
// 比较厉害 兼容性ie没有对应的方法