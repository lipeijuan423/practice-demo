function loadLinkString (url) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
}
loadLinkString('style.css')
/* 2.style */
function loadStyleString (css) {
    var style = document.createElement('style');
    style.type = 'text/css';
    try {
        style.appendChild(document.createTextNode(css));
    } catch(ex){ /* ie不允许访问<style>子节点 */
        style.styleSheet.cssText = css
    }
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
}
loadStyleString ('background-color: #fff;');