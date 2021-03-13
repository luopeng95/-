/**
 * 求某数之内快乐数之和
 * @param {number} num
 */
const happyNumSum = (num) => {
    // 快乐数之和
    let cnt = 0;
    // 快乐数集合
    let happySet = new Set();
    // 非快乐数集合
    let noHappySet = new Set();
    // 运算过程中的缓存数组
    let cacher = [];

    while (num) {
        console.log('num进行循环：', num);
        isHappyNum(num, happySet, noHappySet, cacher) ? (cnt += num) : '';
        num--;
    }
    return cnt;
};

/**
 * 判断一个数是否是快乐数
 * @param {Number} num
 * @param {Set} happySet
 * @param {Set} noHappySet
 * @param {Array} cacher
 *
 */
const isHappyNum = (num, happySet, noHappySet, cacher) => {
    console.log('传入的值:', num);
    if (num === 1) {
        cacher.push(num);
        happySet.add(cacher);
        cacher = [];
        return true;
    }

    // 先判断当前的计算值是否在快乐数或者非快乐数中
    if (happySet.has(num)) {
        cacher = [];
        return true;
    } else if (noHappySet.has(num)) {
        cacher = [];
        return false;
    } else if (cacher.includes(num)) {
        cacher.push(num);
        noHappySet.add(cacher);
        cacher = [];
        return false;
    } else {
        let cnt = 0;
        cacher.push(num);
        num += '';
        for (let i = 0; i < num.length; ++i) {
            cnt += (+num[i]) ** 2;
        }
        return isHappyNum(cnt, happySet, noHappySet, cacher);
    }
};

console.log(happyNumSum(100000));
