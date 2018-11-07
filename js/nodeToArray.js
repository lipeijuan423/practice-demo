// nodeList转换为Array
function convertToArray (nodes) {
    var array = null;
    try {
        array = Array.prototype.slice.call(nodes, 0);
    } catch (ex) {
        // IE8之前的版本
        array = new Array();
        for (let index = 0; index < nodes.length; index++) {
            array.push(nodes[i]);
        }
    }
    return array;
}