/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 快慢指针解法
 * 如果存在环，那么快慢指针必定会相遇，这是因为快指针在逐渐靠近慢指针，且每次靠近的距离为1，也就是说假设快指针距离慢指针的距离为x，快(0),慢(x)，那么在经过x次移动之后，快(2x)，慢(2x)，此时快慢指针就相遇了。
 * 时间复杂度 O(n), 空间复杂度 O(1)
 * @param {ListNode} head
 * @return {boolean}
 */

/*  var hasCycle = function (head) {
    // 如果只有一个节点，肯定没有环
    if (head === null || head.next === null) {
        return false;
    }

    // 生成快慢指针
    let fast = head.next;
    let low = head;

    // 开始循环判断
    while (fast.next && fast.next.next) {
        // 如果在循环的过程中快慢指针相遇了就代表有环
        if (fast === low) {
            return true;
        } else {
            fast = fast.next.next;
            low = low.next;
        }
    }

    // 结束了循环就代表没有环
    return false;
}; */

/**
 * 暴力解法
 * 思路：通过比较当前走了多少步和从head走到当前需要多少进行判断。如果不存在环，那么每次比较的步长都是一样的，如果存在环那么步长就会不一样，多走了一圈，并且当前节点就是环的入口
 * 时间复杂度 O(n^2)，空间复杂度 O(1)
 * @param {ListNode} head
 * @return {boolean}
 */

/* const hasCycle = (head) => {
    // 如果只有一个节点，肯定没有环
    if (head === null) {
        return false;
    }
    // 定义一个指针表示当前的节点
    let cur1 = head;
    // 定义一个变量表示当前的步长
    let setp1 = 0;
    // 开始循环，结束条件为循环到链表最后一位
    while (cur1.next) {
        cur1 = cur1.next;
        ++setp1;

        // 指针移动之后就判断从 head 到当前指针位置的步长是否相同
        let cur2 = head;
        let setp2 = 0;
        while (cur1 !== cur2) {
            cur2 = cur2.next;
            ++setp2;
        }
        // 循环结束之后判断当前步长
        if (setp1 !== setp2) {
            return true;
        }
    }
    // 循环结束代表链表没有环
    return false;
}; */

/**
 * 哈希表解法
 * 思路：存储遍历过的每一个元素，在遍历时与哈希表中的元素进行比较，如果相同则代表是环的入口
 * 时间复杂度 O(n)，空间复杂度 O(n)
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycle = (head) => {
    // 如果只有一个节点，肯定没有环
    if (head === null) {
        return false;
    }

    // JS中使用 map 数据结构作为哈希表
    let hashMap = new Map();
    // 定义指针代表当前的位置
    let cur = head;

    while (cur) {
        // 遍历的时候先判断有没有存在节点
        if (hashMap.has(cur)) {
            return true;
        }
        hashMap.set(cur, true);
        cur = cur.next;
    }
    // 循环结束，没有环
    return false;
};

// @lc code=end
