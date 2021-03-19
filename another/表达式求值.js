/**
 * 递归计算表达式：找出优先级最低的符号
 * @param {String} str 要递归的表达式
 * @param {Number} left 递归的开始索引
 * @param {Number} right 递归的结束索引
 */
const recursive = (str, left, right) => {
    // 优先级最低的符号的index
    let op = -1;
    // 最低优先级的大小
    let curSmall = Infinity;
    // 当前优先级进行计算时需要的系数
    let temp = 0;

    for (let i = left; i < right; ++i) {
        // 当前符号的优先级
        let cur = Infinity;
        switch (str[i]) {
            case '+':
            case '-':
                cur = temp + 1;
                break;
            case '*':
            case '/':
                cur = temp + 2;
                break;
            case '(':
                temp += 100;
                break;
            case ')':
                temp -= 100;
                break;
        }
        if (cur < curSmall) {
            op = i;
            curSmall = cur;
        }
    }

    // 循环结束，此时已经确定了优先级最低的符号的位置
    if (op !== -1) {
        console.log('最低优先级', str[op]);
        let a = recursive(str, left, op - 1);
        let b = recursive(str, op + 2, right);
        // 判断符号类型进行操作
        switch (str[op]) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
        }
    } else {
        // 没有符号了就输出得到的数字
        let num = '';
        for (let i = left; i < right; ++i) {
            if (!isNaN(str[i])) {
                num += str[i];
            }
        }
        console.log('返回的数字：', num);
        return +num;
    }
};

let str = '3 * (5 + 10 * 20)';
console.log(recursive(str, 0, str.length));
