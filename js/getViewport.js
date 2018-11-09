// 浏览器视口大小
function getViewport () {
    if (document.compatMode == 'BackCompat') {
        return { /* ie7之前的版本 */
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    } else {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
}