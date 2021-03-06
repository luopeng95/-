let judgeReapt = str =>{
    let long = 0;
    let longStr = "";
    let currentStr = "";

    for(let i = 0; i < str.length; ++i){
        if(currentStr.includes(str[i])){
            currentStr += str[i]
            if(currentStr.length > long){
                long = currentStr.length;
                longStr = currentStr;
            }
        }else{
            currentStr += str[i];
            let index = currentStr.indexOf(str[i]);
            currentStr = currentStr.slice(index + 1);
        }
    }
    return long
}