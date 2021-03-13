/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 哈希解法：循环一遍所有的几点，再根据 index 进行操作和处理边界值（使用虚拟头结点预处理删除节点为头结点的情况）
 * 时间复杂度：O(n)， 空间复杂度O(n)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/* var removeNthFromEnd = function (head, n) {
    let ret = new ListNode(0, head);
    let hashMap = new Map();
    while (ret) {
        hashMap.set(ret, true);
        ret = ret.next;
    }

    let nodes = Array.from(hashMap.keys());
    let length = nodes.length;
    nodes[length - 1 - n].next = nodes[length + 1 - n] || null;
    return nodes[0].next;
}; */

/**
 * 迭代解法：类似于旋转链表那题，找到要操作节点的前一个节点进行对应的操作即可，要操作的前一个节点距离最后一个节点的位置是 N
 * 时间复杂度：O(n)， 空间复杂度O(1)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/* const removeNthFromEnd = (head, n) => {
    let ret = new ListNode(0, head);
    let pre = ret;
    let cur = head;
    while (--n) {
        cur = cur.next;
    }
    while (cur.next) {
        cur = cur.next;
        pre = pre.next;
    }

    pre.next = pre.next.next;
    return ret.next;
}; */

/**
 * 长度计算解法：拿到链表的长度l，那么链表删除节点的长度为 l-n
 * 时间复杂度：O(n)， 空间复杂度O(1)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const removeNthFromEnd = (head, n) => {
    let ret = new ListNode(0, head);
    let pre = ret;
    let cur = head;
    let len = 1;
    while (cur) {
        cur = cur.next;
        len++;
    }
    let k = len - n;
    while (--k) {
        pre = pre.next;
    }
    pre.next = pre.next.next;
    return ret.next;
};

// @lc code=end
