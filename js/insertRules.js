function insertRule (sheet, selectorText, cssText, position) {
    if (sheet.insertRule) {
        sheet.insertRule(selectorText+"{"+cssText+"}", position);
    } else {
        sheet.addRule(selectorText, cssText, position);
    }
}
insertRule(document.styleSheets[0], 'body', 'color: red;', 0)
// 删除规则 - 不太使用
function deleteRule (sheet, index) {
    if (sheet.removeRule) {
        sheet.deleteRule(index);
    } else { // 兼容ie
        sheet.removeRule(index);
    }
}