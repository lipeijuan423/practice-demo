// 最简单的拖放界面
var DragDrop = function () {
    var dragging = null,
        diffX = 0,
        diffY = 0;
    function handleEvent(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        switch(event.type){
            case 'mousedown':
                if (target.className.indexOf('draggable') > -1) {
                    dragging = target;
                    diffX = event.clientX - target.offsetLeft;
                    diffY = event.clientY - target.offsetTop;
                }
                break;
            case 'mousemove':
                if (dragging !== null) {
                    // 元素左上角
                    dragging.style.left = (event.clientX - diffX) + 'px';
                    dragging.style.top = (event.clientY-diffY) + 'px';
                }
                break;
            case 'mouseup':
                dragging = null;
                break;
        }
    }
    return {
        enable: function(){
            EventUtil.addHandler(document, 'mousedown', handleEvent);
            EventUtil.addHandler(document, 'mousemove', handleEvent);
            EventUtil.addHandler(document, 'mouseup', handleEvent);
        },
        disable: function(){
            EventUtil.removeHandler(document, 'mousedown', handleEvent);
            EventUtil.removeHandler(document, 'mousemove', handleEvent);
            EventUtil.removeHandler(document, 'mouseup', handleEvent);
        }
    }
}