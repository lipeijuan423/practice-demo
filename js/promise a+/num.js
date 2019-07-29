var arr = [], filterArr = [];
var i = 0;
while (i < 101) {
  i++;
  arr.push(i);
}

arr.filter((item, index) => {
  if (item == 1) {
    return false
  }
  let flag = true
  index--;
  while (index > 1) {
    let res = item % index;
    !res && (flag = false)
    index--;
  }
  if (!flag) {
    return item
  }
})