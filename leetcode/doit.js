var twoSum = function(nums, target) {
    let map  = {}
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i]
       if(typeof map[complement] !== 'undefined' && map[complement] !== i){
           return [map[complement], i]
       }
        map[nums[i]] = i
    }
};

// 整数倒叙输出

/**
 * @param {number} x
 * @return {number}
 1.x%10 x /10 
 2.转字符串 转数组 倒叙 转回来
 */
var reverse = function(x) {
   var rev = 0;
    while(x !== 0){
        let pop = parseInt(x % 10);
        x = parseInt(x / 10);
        if(rev > 2147483647 / 10 || (rev == 2147483647 / 10 && pop > 7)){
            return 0;
        }
        if(rev < -2147483648 / 10 || (rev == -2147483648 / 10 && pop < -8)){
            return 0
        }
        rev= rev * 10 + pop
    }
    return rev
    
};