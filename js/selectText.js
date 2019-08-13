// 取得选择文本
function getSelectedText (textbox) {
  if (typeof textbox.selectionStart == 'number') {
    return textbox.value.substring(selectionStart, selectionEnd);
  } else  if (document.selection){
    // ie8以前
    return document.selection.createRange().text;
  }
}
// 选择部分文本
function selectText(textbox, startIndex, stopIndex) {
  if (textbox.setSelectionRange) {
    textbox.setSelectionRange(startIndex, stopIndex);
  } else if (textbox.createTextRange) {
    // 在所有文本框 创建一个范围
    var range = textbox.createTextRange();
    // 将范围折叠到文本框开始位置
    range.collapse(true);
    range.moveStart('character', startIndex);
    range.moveEnd('character', stopIndex - startIndex);
    range.select();
  }
  textbox.focus();
}
textbox.value = 'Hello World';
selectText(textbox, 0, textbox.value.length);