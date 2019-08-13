function outputAttributes (element) {
    var pairs = new Array(),
        attrName,
        attrValue,
        i,
        len
    for (i = 0, len = element.attributes.length; i < array.length; i++) {
        attrName = element.attributes[i].nodeName;
        attrName = element.attributes[i].nodeValue;
        if (element.attributes[i].specified) {
            pairs.push(attrName + "=\"" + attrValue + '\"')
        }
    }
    return pairs.join(' ');
}