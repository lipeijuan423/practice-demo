// 动态加脚本 并知道什么时候完成
function loadScriptString (code) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    try {
        script.appendChild(document.createTextNode(code));
    } catch (ex) {
        script.text = code;
    }
    document.body.appendChild(script)
}
loadScriptString("function sayHi() {console.log('loaded')}")