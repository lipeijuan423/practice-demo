// surroundContents
var selection = frames['richedit'].getSelection();
// 取得选择的文本   
var selectText = selection.toString();
var range = selection.getRangeAt(0);
// 突出显示文本
var span = frames['richedit'].document.createElement('span');
span.style.backgroundColor = 'yellow';
range.surroundContents(span);
// 2.pasteHTML
var range = frames['richedit'].document.selection.createRange();
var selectedText = range.text;
/* ie */
range.pasteHTML('<span style="background-color: yellow">' + range.htmlText +'</span>')