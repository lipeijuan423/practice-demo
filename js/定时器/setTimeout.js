/* 重复定时器 */
setTimeout(() => {
    var div = document.getElementById('div');
    left = parseInt(div.style.left);
    div.style.left = left + 'px'
    if (left < 200) {
        setTimeout(arguments.callee,50);
    }
}, 50);