// 数组类型
/* 
  1. 双重循环
  2. for    indexOf/对象键值对
  3. sort 前一个和item比较
  3. filter  includes/array.indexOf(item, 0) === index/
  4. new Set / Map   has/includes
*/

function unique(array){
  if (!Array.isArray(array)) {
    throw TypeError('need array')
  }
  var res = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (res.indexOf(element) === -1) {
      res.push(element)
    }
  }
  return res;
}