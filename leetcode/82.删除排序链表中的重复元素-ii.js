/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * 快慢指针：使用虚拟头结点头部节点，慢指针pre指向最近的不重复的元素，cur作为当前循环的元素，找到下一个不重复元素之后进行 pre=cur
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) return null;
    let ret = new ListNode(0, head);
    let pre = ret;
    let cur = head;
    while (cur && cur.next) {
        if (pre.next.val !== cur.next.val) {
            pre = pre.next;
            cur = cur.next;
        } else {
            while (cur && cur.next && pre.next.val === cur.next.val) {
                cur = cur.next;
            }
            pre.next = cur.next;
            cur = cur.next;
        }
    }
    return ret.next;
};
// @lc code=end
