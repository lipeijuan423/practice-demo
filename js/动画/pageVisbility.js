function isHiddenSupported(){
    return typeof (document.hidden || document.msHidden || document.webkitHidden) != 'undefined';
}