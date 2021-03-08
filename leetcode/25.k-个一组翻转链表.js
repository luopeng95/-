/*
 * @Author: your name
 * @Date: 2021-03-07 18:02:15
 * @LastEditTime: 2021-03-08 16:40:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \suanfa\leetcode\25.k-个一组翻转链表.js
 */
/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * 哈希表解法：先循环一遍所有的节点并存储到哈希表中，接下来用求余的方式截取出需要进行翻转的区间。题目是需要我们使用 K 个一组进行翻转，那么在翻转的时候就要分情况，是不是 当前组的最后一个，是最后一个的话要指向当前组的第一个，如果是当前组的第一个要指向下一组的最后一个。
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/* var reverseKGroup = function(head, k) {
	if (head === null || head.next === null) {
		return head;
	}

	// 设置哈希表
	let hashMap = new Map();
	hashMap.set(head, true);

	// 设置指针
	let cur = head;
	while (cur.next) {
		cur = cur.next;
		hashMap.set(cur);
	}

	// 循环结束代表已经存储了所有的节点
	let nodes = Array.from(hashMap.keys());
	let length = nodes.length;

	// 如果当前节点的长度都不满足一次循环的话就直接返回
	if (length < k) {
		return head;
	}

	// 使用求余的方式找到要进行转换的区间
	let needs = nodes.slice(0, length - length % k);
	let needsLen = needs.length;

	for (let i = 0; i < needsLen; ++i) {
		// 如果当前循环到的节点是本组的第一个节点
		if (i % k === 0) {
			needs[i].next = needs[i + 2*k - 1] || null;
		} else {
			needs[i].next = needs[i - 1];
		}
	}

	// 循环结束之后代表翻转区间的所有的节点都已经翻转完毕
	needs[needsLen - k].next = nodes[length - length % k] || null;

	// return new ListNode(needsLen, null);
	return needs[k - 1];

}; */

/**
 * 迭代解法：创建虚拟头结点来指向真实的节点，并且使用cur代表当前节点，loop代表循环的节点和区间尾节点，简单点来说就是循环 K 次，判断长度够不够，够的话就进行翻转，不够则不进行翻转，直接连接尾节点。
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const reverseNodeList = (head, cnt) => {
	let pre = null;
	let cur = head;
	while (cnt--) {
		[cur.next, pre, cur] = [pre, cur, cur.next]
	}
	head.next = cur;
	// 返回最后一个节点
	return pre;
}

const reverseKGroup = (head, k) => {
	if (head === null || head.next === null) {
		return head;
	}

	// 设定预设值
	let ret = new ListNode(0, head);
	let pre = ret;
	let cur = pre.next;
	let loop = cur;

	while (loop) {
		for (let i = 0; i < k - 1; ++i) {
			loop = loop.next;
			if (!loop) {
				// return ret;
				return ret.next;
			}
		}
		// return cur;
		let rightNode = reverseNodeList(cur, k);
		[pre.next] = [rightNode];
		pre = cur;
		cur = cur.next;
		loop = cur;

	}
return ret.next;
}

// @lc code=end

