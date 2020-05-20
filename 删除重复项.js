// 利用set去除重复元素
var removeDuplicates = function(nums) {
    let set = Array.from(new Set(nums));
    for(let i = 0; i < set.length; ++i){
        nums[i] = set[i];
    }
    return set.length;
};

// 使用双指针
var removeDuplicates2 = function(nums) {
    var j = 0;
    var n = nums.length;
    for(let i = 1;i<n;i++){
        if(nums[i]!=nums[i-1]){
            j++;
            nums[j] = nums[i];
        }
    }
    return j+1;
};
