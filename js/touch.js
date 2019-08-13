function handleTouchEvent (event) {
    if (event.touches.length === 1) { // 当前跟踪的触摸跟踪Touch对象数组
        var output = document.getElementById('output');
        switch (event.type) {
            case 'touchstart':
                output.innerHTML = 'Touch start: ' + event.touches[0].clientX + ',' + event.touches[0].clientY
                break;
            case 'touchend': 
                output.innerHTML = 'Touch start: ' + event.touches[0].clientX + ',' + event.touches[0].clientY;
                break;
            case 'touchmove': 
                output.innerHTML = 'Touch start: ' + event.touches[0].clientX + ',' + event.touches[0].clientY;
                break;
            default:
                break;
        }
    }
}
EventUtil.addHandler(document, 'touchstart', handleTouchEvent);

/* 
 * touchStart > mouseover > mousemove > mousedown > mouseup > click > touchend
*/