/**
 * 
 * @param {Array} ary 传入一个数组，数组最少一个元素
 */
let maxSubArray = (ary) => {
    let ans = ary[0];
    let sum = 0;
    for(let a of ary){
        if(sum > 0){
            sum += a
        }else{
            sum = a;
        }
        ans = ans > sum ? ans : sum;
    }
    return ans;
}
// console.log(maxSubArray([-2, -4, -1, 9, -1, 9]));

/**
 * 
 * @param {Array} ary 最少一个元素
 */
let minSubArray = ary =>{
    let ans = ary[0];
    let sum = 0;
    for(const a of ary){
        if(sum < 0){
            sum += a;
        }else{
            sum = a;
        }
        ans = ans > sum ? sum : ans;
    }
    return ans
}

// console.log(minSubArray([-1, -4, 5, -10]));