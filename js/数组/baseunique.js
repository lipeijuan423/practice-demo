/* 数组去重 */
var array = [1,2,3,,'1',2,3];
function unique (array) {
    var res = [];
    for (let i = 0, arrLen = array.length; i < arrLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++) {
            if (array[i] === res[j]) {
                break;
            }
        }
        if (j === resLen) {
            res.push(array[i]);
        }
    }
    return res;
}
unique(array);
// indexOf 'NaN'
function indexofUnique (array) {
    var res = []
    for (let i = 0, arrLen = array.length; i < arrLen; i++) {
        var current = array[i];
        if (res.indexOf(current) === -1) {
            res.push(current);
        }
    }
    return res;
}
indexofUnique(array)
// sort
function sortUnique (array) {
    var sortArr = array.concat().sort();
    var seen, res = [];
    for (let i = 0, arrLen = sortArr.length; i < arrLen; i++) {
        if (!i || sortArr[i] !== seen) {
            res.push(sortArr[i]);
        }
        seen = sortArr[i];
    }
    return res;
}
sortUnique(array);
// fun api
/* 
    第一版
    isSorted 表示已经排好序
*/
var array1 = [1, 2, '1', 2, 1];
var array2 = [1, 1, '1', 2, 2];
function fnUnique (array, isSorted) {
    var res = [];
    var seen;
    for (let i = 0, len = array.length; i < len; i++) {
        var value = array[i];
        if (isSorted) {
            if (!i || value !== seen) {
                res.push(value);
            }
            seen = value;
        } else {
            if (res.indexOf(value) === -1) {
                res.push(array[i]);
            }
        }
    }
    return res;
}
fnUnique(array1, false);
fnUnique(array2, true);
/* 
    第二版
    + iteratee 增加条件 例：不分大小写
*/
var array3 = [1,2, 'a','A'];
function fnUnique02 (array, isSorted, iteratee) {
    var res = [];
    var seen = [];
    for (let i = 0, len = array.length; i < len; i++) {
        var value = array[i];
        var computed = iteratee ? iteratee(value) : value;
        if (isSorted) {
            if (!i || computed !== seen) {
                res.push(computed);
            }
            seen = computed;
        } else if (iteratee) {
            if (seen.indexOf(computed) === -1) {
                res.push(computed);
                seen.push(computed);
            }
        } else {
            if (res.indexOf(value) === -1) {
                res.push(value);
            }
        }
    }
    return res;
}
fnUnique02(array3, false, function(item){
    return typeof item == 'string' ? item.toLowerCase(item):item;
});
/* es5 filter */
function filterUnique (array) {
    var res = array.filter((item, index, array) => {
        return array.indexOf(item) === index;
    })
    return res;
}
filterUnique(array3);
/* 排序后选择 */
var array4 = [1, 3, 4, 4, 5, 6];
function sortFilterUnique(array) {
    var res = array.concat().sort().filter((item, index) => {
        // return !index || array.indexOf(item) === index;
        return !index || item === array[i-1];
    });
    return res;
}
sortFilterUnique(array4)
/* object键值对 */
var array5 = [1,1,3,2, 2, 3, 4, '1', '2'];
function objectUnique(array) {
    var obj = {}
    var res = array.filter((item, index) => {
        // 对象的键值只能是字符串
        // return obj.hasOwnProperty(item) ? false : obj[item] = true;
        return obj.hasOwnProperty(typeof item + item) ? false : obj[typeof item + item] = true;
    })
    return res;
}
objectUnique(array5);
var objArray = [{value: 1}, {value: 1}, {value: 2}];
function ooUnique(array) {
    var obj = {};
    var res = array.filter((item, index) => {
        return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : obj[typeof item + JSON.stringify(item)] = true;
    })
    return res;
}
ooUnique(objArray);
/* 
    * Set成员必须是唯一的
*/  
var arrForSet = [1, 2, 3, 3, 4, 1, '1', '2', '1'];
var twoSet = [[1,2,3], 1,2,3,4,[4]];
function setUnique (array) {
    // return Array.from(new Set([array]));
    return [...new Set(array)];
}
var setUnique = a => [...new Set(a)];
setUnique(arrForSet);
// 二维数组 递归
setUnique(twoSet);
/* 
    * Map
*/
function mapUnique(array){
    let mapArr = new Map();
    return array.filter(a => (!mapArr.has(a) && mapArr.set(a, 1)));
}
mapUnique(arrForSet)
