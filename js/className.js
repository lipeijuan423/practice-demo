// 实现删除一个类名
function removeClassName (ele, name) {
    var classNames = ele.className.split(/\s+/);
    var pos = -1,
        i,
        len;
    for (i = 0, len = classNames.length; i < len; i++) {
        if (classNames[i] === name) {
            pos = i;
            break;
        }
    }
    classNames.splice(pos, 1);
    ele.className = classNames.join(' ');
}
/* 
    firfox chorme 中div.classList.remove(name)
*/