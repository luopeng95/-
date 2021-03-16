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
        // console.error('num进行循环：', num);
        // console.log('当前的缓存：', JSON.parse(JSON.stringify(cacher)));
        const res = isHappyNum(num, happySet, noHappySet, cacher);
        // isHappyNum(num, happySet, noHappySet, cacher) ? (cnt += num) : '';
        if (res) {
            cnt += num;
            // console.log(`${num}是快乐数`);
        }
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
    // console.log('传入的值:', num);
    if (num === 1) {
        happySet.add(cacher);
        cacher.length = 0;
        return true;
    }

    // 先判断当前的计算值是否在快乐数或者非快乐数中
    if (happySet.has(num)) {
        // console.log('在快乐数集合中找到了：', num);
        cacher.length = 0;
        return true;
    } else if (noHappySet.has(num)) {
        // console.log('在非快乐数集合中找到了：', num);
        cacher.length = 0;
        return false;
    } else if (cacher.includes(num)) {
        // console.log('在缓存中找到了：', num);
        cacher.push(num);
        noHappySet.add(cacher);
        cacher.length = 0;
        return false;
    } else {
        let cnt = 0;
        cacher.push(num);
        num += '';
        for (let i = 0; i < num.length; ++i) {
            cnt += (+num[i]) ** 2;
        }
        // console.log('再次循环的值：', cnt);
        return isHappyNum(cnt, happySet, noHappySet, cacher);
    }
};

console.log(happyNumSum(100000));
