// 将当前元素变为可被拖放目标
var droptarget = document.getElementById('droptarget');
EventUtil.addHandler(droptarget, 'dragover', function (event) {
    EventUtil.preventDefault(event);
})
EventUtil.addHandler(droptarget, 'dragenter', function (event) {
    EventUtil.preventDefault(event);
})
// firfox导致无效的url
EventUtil.addHandler(droptarget, 'drop', function (event) {
    EventUtil.preventDefault(event);
    // ie10之前都不支持 MIME类型名
    var text = event.dataTransfer.getData('text') || event.dataTransfer.getData('text/plain');
    var url = event.dataTransfer.getData('URL');

})
// 放置目标设置数据
EventUtil.addHandler(droptarget, 'dropstart', function (event) {
    // 文本数据 = text/plain
    event.dataTransfer.setData('text', 'some text');
    // url = text/url-list
    event.dataTransfer.setData('URL', 'http://www.baidu.com')
})