// 冒泡排序: 比较两个相邻的项，如果第一个大于第二个则交换他们的位置,元素项向上移动至正确的顺序，就好像气泡往上冒一样
冒泡demo:
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {        //相邻元素两两对比
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}
// 1) 首先，在数组中选择一个中间项作为主元
// 2) 创建两个指针，左边的指向数组第一个项，右边的指向最后一个项，移动左指针，直到找到一个比主元大的项，接着，移动右边的指针，
// 直到找到一个比主元小的项，然后交换它们。重复这个过程，直到
// 左侧的指针超过了右侧的指针。这个使比主元小的都在左侧，比主元大的都在右侧。这一步叫划分操作
// 3) 接着，算法对划分后的小数组（较主元小的值组成的的小数组， 以及较主元大的值组成的小数组）重复之前的两个步骤，直到排序完成
快排demo:
function quickSort(arr, left, right) {
  let len = arr.length;
  let partitionIndex;
  left = typeof left !== 'number' ? 0 : left;
  right = typeof right !== 'number' ? len - 1 : right;
  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {     //分区操作
  let pivot = left;                      //设定基准值（pivot）
  let index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }
  [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]];
  return index - 1;
}
// 选择排序：大概思路是找到最小的放在第一位，找到第二小的放在第二位，以此类推 算法复杂度O(n^2)
选择demo:
function selectionSort(arr) {
  let len = arr.length;
  let minIndex;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {     //寻找最小的数
        minIndex = j;                 //将最小数的索引保存
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
// 插入排序：每次排一个数组项，假设数组的第一项已经排序，接着，把第二项与第一项进行对比，第二项是该插入到第一项之前还是之后，第三项是该插入到第一项之前还是第一项之后还是第三项
插入demo:
function insertionSort(arr) {
  let len = arr.length;
  let preIndex, current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}
// 归并排序：Mozilla Firefox 使用归并排序作为Array.prototype.sort的实现，而chrome使用快速排序的一个变体实现的,前面三种算法性能不好，但归并排序性能不错 算法复杂度O(nlog^n)
// 归并排序是一种分治算法。本质上就是把一个原始数组切分成较小的数组，直到每个小数组只有一个位置，接着把小数组归并成较大的数组，在归并过程中也会完成排序，直到最后只有一个排序完毕的大数组
归并demo:
function mergeSort(arr) {  //采用自上而下的递归方法
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  result.push(...left);
  result.push(...right);
  return result;
}
//堆排序：堆排序把数组当中二叉树来排序而得名。
// 1）索引0是树的根节点；2）除根节点为，任意节点N的父节点是N/2；3）节点L的左子节点是2*L；4）节点R的右子节点为2*R + 1
// 本质上就是先构建二叉树，然后把根节点与最后一个进行交换，然后对剩下对元素进行二叉树构建，进行交换，直到剩下最后一个
堆demo:
var len;    //因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

function buildMaxHeap(arr) {   //建立大顶堆
  len = arr.length;
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i);
  }
}

function heapify(arr, i) {     //堆调整
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, largest);
  }
}

function heapSort(arr) {
  buildMaxHeap(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    len--;
    heapify(arr, 0);
  }
  return arr;
}
// 希尔排序

function shellSort(arr) {
  var len = arr.length;
  for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 注意：这里和动图演示的不一样，动图是分组执行，实际操作是多个分组交替执行
    for (var i = gap; i < len; i++) {
      var j = i;
      var current = arr[i];
      while (j - gap >= 0 && current < arr[j - gap]) {
        arr[j] = arr[j - gap];
        j = j - gap;
      }
      arr[j] = current;
    }
  }
  return arr;
}