var mySearch;
mySearch = function (src, str) {
    var result = src.search(str);
    console.log(result, 'result');
    if (result != -1) {
        return true;
    }
    else {
        return false;
    }
};
mySearch('123', '1');
