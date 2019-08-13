// 非递归算法
function binary_search(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = parseInt((high + low) / 2);
    if (key === arr[mid]) {
      return mid;
    } else if (key > arr[mid]) {
      low = mid + 1;
    } else if (key < arr[mid]) {
      high = mid - 1;
    } else {
      return -1;
    }
  }
}


// 递归算法
function binary_search(arr, low, high, key) {
  if (low > high) {
    return -1;
  }
  let mid = parseInt((high + low) / 2);
  if (arr[mid] === key) {
    return mid;
  } else if (arr[mid] > key) {
    high = mid - 1;
    return binary_search(arr, low, high, key);
  } else if (arr[mid] < key) {
    low = mid + 1;
    return binary_search(arr, low, high, key);
  }
};
/* 
思路
（1）首先，从有序数组的中间的元素开始搜索，如果该元素正好是目标元素（即要查找的元素），则搜索过程结束，否则进行下一步。
（2）如果目标元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半区域查找，然后重复第一步的操作。
（3）如果某一步数组为空，则表示找不到目标元素。
 */