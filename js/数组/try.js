// 数字类 / 基本类型
var numArr01 = [1,2,3,4,5,6,7,8, 9];
var numArr02 = [1,2,3,4,5,6,7,8];
/**
    *  1. 最容易想通，但时间空间复杂度高
 循环
    * 找出两个集合中相同值
**/
let resArr = []
for (let i = 0; i < numArr01.length; i++) {
    for (let j = 0; j < numArr02.length; j++) {
        if (numArr01[i] === numArr02[j]) {
            resArr.push(numArr01[i]);
            break;
        }
    }
    
}
console.log(resArr)
/* 
    2. hash
*/
// 单个数组去重
var hash = {}
for (let i = 0; i < numArr01.length; i++) {
    if (!hash[numArr01[i]]) {
        hash[numArr01[i]] = true;
    }
}
// 两个数组
var hash02 = {}
let interSetionHash = []
let differenceHash = []
for (let i = 0; i < numArr01.length; i++) {
    hash02[numArr01[i]] = true;
}
// 检测出的是 numArr02在numArr01中的差异，不能得到 两数组之间的不同值
for (let j = 0; j < numArr02.length; j++) {
    if (typeof hash02[numArr02[j]] != 'undefined') {
        // 相同
        interSetionHash.push(numArr02[j])
    } else {
        differenceHash.push(numArr02[j])
    }
}
console.log(hash)
console.log(hash02)
// 交集 差集
/* 
    * 3. ES7 includes 
*/
var sameNum = numArr01.filter(v => numArr02.includes(v))
var difference = numArr01.concat(numArr02).filter(v => (!numArr01.includes(v) || !numArr02.includes(v)));
/* 
    * 4. Set结构
*/
let numArrSet01 = new Set(numArr01);
let numArrSet02 = new Set(numArr02);
var unionSet = new Set([...numArrSet01, ...numArrSet02]);
var interSectionSet = new Set([...numArrSet01].filter(v => numArrSet02.has(v)));
var differenceSet = new Set([...numArrSet01, ...numArr02].filter(v => (!numArrSet01.has(v) || !numArrSet02.has(v))))
let arr01 = Array.from(interSectionSet);
/* 
    5. 一种思想
*/
var C = []
let objArr01 = {a:1}
let objArr02 = {a:1,b:2}
for (let objA in objArr01) {
    for (let objB in objArr02){
        if (objA === objB) {
            C.push(objA)
        }
    }
}
// 引用类型



