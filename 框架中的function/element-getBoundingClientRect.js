function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();

  // whether the IE version is lower than 11
  var isIE = navigator.userAgent.indexOf("MSIE") != -1;

  // fix ie document bounding top always 0 bug
  var rectTop = isIE && element.tagName === 'HTML'
    ? -element.scrollTop
    : rect.top;

  return {
    left: rect.left,
    top: rectTop,
    right: rect.right,
    bottom: rect.bottom,
    width: rect.right - rect.left,
    height: rect.bottom - rectTop
  };
}