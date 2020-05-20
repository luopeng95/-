var plusOne = function(digits) {
    // 解法一
    // let num = BigInt(digits.join("")) + 1n + ""
    // return num.split("");

    // 解法二
    for(let i = digits.length - 1; i >= 0; --i){
        if(digits[i] < 9){
            digits[i] += 1;
            return digits
        }else{
            if(i === 0){
                digits[i] = 0;
                digits.unshift(1);
                return digits;
            }else{
                digits[i] = 0;
            }
            
        }
    }
};