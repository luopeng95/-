/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * 单指针迭代：从头结点开始迭代，判断当前节点的值是否与下一节点相等
 * @param {ListNode} head
 * @return {ListNode}
 */
/* var deleteDuplicates = function (head) {
    let cur = head;
    while (cur && cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
}; */

/**
 * 双指针迭代：从头结点开始迭代，找到与上一个节点不重复的节点，把上一个节点的 next 指向当前不重复的节点并且更新 pre
 * @param {ListNode} head
 * @return {ListNode}
 */

/* const deleteDuplicates = (head) => {
    if (head === null) {
        return head;
    }
    let pre = head;
    let cur = head.next;
    while (cur) {
        if (pre.val !== cur.val) {
            pre.next = cur;
            pre = cur;
        }
        cur = cur.next;
    }
    pre.next = null;
    return head;
}; */

/**
 * 递归解法：核心思想也是根据上面两种迭代方法的解法：1--每次都更改 pre 的 next 指向  2--找到正确的值再一次性更改。这两种方式都可以通过递归方式进行
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
// 每次都判断 next 指向
/* const deleteDuplicates = (head) => {
  反向递归
    if (head === null) {
        return head;
    }
    head.next = deleteDuplicates(head.next);
    if (head.next !== null && head.val === head.next.val) {
        return head.next;
    }
    return head;
}; */

// 拿到最新的非重复节点再进行返回改变 next 指向
const deleteDuplicates = (head) => {
    // 正向递归
    if (head === null) {
        return head;
    }
    let cur = head.next;
    while (cur && head.val === cur.val) {
        cur = cur.next;
    }
    deleteDuplicates(cur);
    head.next = cur;
    return head;
};

// @lc code=end
