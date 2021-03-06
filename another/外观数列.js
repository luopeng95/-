let countAndSay = function(n) {
    if(n === 1) return "1";
    if(n === 2) return "11";
    let num = "11";
    for(let i = 3; i <= n; ++i){
        let k = 0;
        let str = "";
        let count = 1;
        for(let j = 1; j < num.length; ++j){
            if(num[k] === num[j]){
                ++count;
            }else{
                str += count + num[k];
                k = j;
                count = 1;
            }
        }
        str += count + num[k];
        num = str;
    }
    return num;
};