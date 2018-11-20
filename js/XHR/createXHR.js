function ie7BeforeCreateXHR () {
    if (typeof arguments.callee.activeXString != 'string') {
        var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'],
            i, len;
        for (i = 0, len = versions.length; i < len; i++) {
            try {
                new ActiveXObject(versions[i]);
                arguments.callee.activeXString = versions[i];
                break;
            } catch (error) {
                
            }
            
        }
    }
    return new ActiveXObject(arguments.callee.activeXString);
}
function createXHR () {
    if (typeof XMLHttpRequest !== 'undefined') {
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != 'undefined') { // ActiveX对象
        ie7BeforeCreateXHR()
    } else {
        throw new Error('NO XHR object available');
    }
}
// 惰性载入函数
var createXHR = (function() {
    if (typeof XMLHttpRequest !== 'undefined') {
        return function(){ new XMLHttpRequest();}
    } else if (typeof ActiveXObject != 'undefined') { // ActiveX对象
        return function (){
            if (typeof arguments.callee.activeXString != 'string') {
                var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'],
                    i, len;
                for (i = 0, len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch (error) {
    
                    }
    
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        }
    } else {
        return function () {
            throw new Error('NO XHR object available');
        }
    }
})()