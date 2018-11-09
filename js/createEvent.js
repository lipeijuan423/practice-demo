// 模拟鼠标事件
function createEventMouse(element) {
    // DOM2 是复数 MouseEvents DOM3是MouseEvent
    var event = document.createEvent('MouseEvents');
    // 前四个 事件类型 是否冒泡 是否取消 view视图
    // 整数  事件相关的信息 screenX/Y clientX/Y
    // Boolean ctrlKey altKey shiftKey meatKey
    // 后两位 按下鼠标键 与事件相关对象
    event.initMouseEvent('click', true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    element.dispathEvent(event);
}
// 模拟键盘事件
function createEventKeyBoard(element) {
    var event;
    // DOM3事件
    if (document.implementation.hasFeature('KeyboardEvents', '3.0')) {
        event = document.createEvent('KeyboardEvent');
        // 'a' => key键的键码 location => 在哪里按下的键 Shift => 空格分割的修改件列表 repeat => 按这个多少次
        event.initKeyboardEvent('keydown', true, true, document.defaultView, 'a', 0, 'Shift', 0);
    } else if (client.brower.firefox) {
        event = document.createEvent('KeyEvents');
        // 65 65 => KeyCode被按下或释放的键码 charCode通过按键生成字符的ASCII编码
        event.initKeyEvent('keypress', true, true, document.defaultView, false, false, false, false, 65, 65)
    } else {
        // 其他浏览器 -- 无法向文本框写入字符
        event = document.createEvent('Events'); // 通用事件
        event.initEvent(type, bubbles, cancelable);
        event.view = document.defaultView;
        event.altKey = false;
        event.ctrlKey = false;
        event.shiftKey = false;
        event.metaKey = false;
        event.KeyCode = 65;
        event.charCode = 65;
    }
    // 触发事件
    element.dispathEvent(event);
}

// 自定义事件
if (document.implementation.hasFeature('CustomEvents', '3.0')) {
    // 自定义事件
    var event = document.createEvent('CustomEvent');
    // details myevent => 自定义事件名
    event.initCustomEvent('myevent', true, true, 'hello lpj');
    element.dispathEvent(event)
}
// 调用 
EventUtil.addHandler(element, 'myevent', function (event) {
    console.log(event.detail)
})
// document可以监听事件冒泡 第三参数为true
EventUtil.addHandler(document, 'myevent', function (event) {
    console.log(event.detail)
})

// IE8及之前模拟事件
function createEventIE (element) {
    // 创建通用事件
    var event = document.createEventObejct();
    // 手动初始化对象
    event.screenX = 0;
    event.screeY = 0;
    event.clientX = 0;
    event.clientY = 0;
    event.ctrlKey = false;
    event.altKey = false;
    event.shiftKey = false;
    event.metaKey = false;
    event.button = 0;
    // 触发事件
    element.fireEvent('onclick', event);
}