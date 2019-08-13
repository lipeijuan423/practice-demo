interface SearchFun{
  (source: string, subString: string): boolean
}
var mySearch:SearchFun;
mySearch = function (src: string, str: string) {
  var result = src.search(str);
  console.log(result, 'result')
  if (result != -1) {
    return true;
  } else {
    return false;
  }
}
mySearch('123', '1')
