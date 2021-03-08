/*
 * @Author: your name
 * @Date: 2021-03-06 09:49:55
 * @LastEditTime: 2021-03-06 11:44:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \suanfa\leetcode\142.环形链表-ii.js
 */
/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * 原理：当存在环的时候快指针必定会与慢指针相遇，从相遇点开始算起，从head开始循环速度为1的指针，同时慢指针从相遇点开始移动，当两个速度为1的指针相遇的时候，那个相遇点就是环的入口。
 * 时间复杂度 O(n), 空间复杂度O(1)
 * 数学原理：
 * 		快指针走过的距离：a + n(b+c) + b
 * 		慢指针走过的距离：a + m(b+c) + b
 * 		快指针是慢指针的两倍：a + b = (n-2m)(b+c)
 * @param {ListNode} head
 * @return {ListNode}
 */
/* var detectCycle = function(head) {
		// 如果是空链表或者单个节点的链表，必定没有环
    if (head === null || head.next === null) {
			return null
		}
		// 设置快慢指针
		let fast = head.next.next;
		let low = head.next;

		while (fast && fast.next) {
			// 判断快慢链表是否指向同一个链表
			if (low === fast) {
				// 当前链表就是相遇点
				let cycle = head;
				while (low !== cycle) {
					low = low.next;
					cycle = cycle.next;
				}
				return cycle;
			}
			low = low.next;
			fast = fast.next.next;
		}

		return null;
}; */

/**
 * 暴力解法
 * 原理：每循环一次就判断一下从开始节点到当前节点走过的步数是否一样，是一样的则表示没有换，不一样则表示有环，且刚好多走了一圈回到了环的起点。
 * 时间复杂度：O(n^2)，空间复杂度：O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */

/* const detectCycle = (head) => {
	if (head === null) {
		return null
	}
	// 一直循环的指针和当前走过的步数
	let cur1 = head;
	let setp1 = 0;
	while (cur1) {
		cur1 = cur1.next;
		++setp1;
		
		// 走了一步之后开始从头循环
		let cur2 = head;
		let setp2 = 0;
		// 循环的意义在于从头走到当前的节点，循环条件可以是步数（要判断是否相等），可以是节点是否相等
		while (cur1 !== cur2) {
			cur2 = cur2.next;
			++setp2;
		}
		// 循环结束就代表两个节点相等了，进行判断
		if (setp1 !== setp2) {
			return cur1;
		}
	}

	// 跳出循环代表走到了链表的最后一位，没有环
	return null;
} */

/**
 * 哈希表解法
 * 原理：每循环一次就判断在哈希表中是否存在对应的节点，如果存在就代表有环且已经循环了一圈，如果没有就把值存在哈希表中。
 * 时间复杂度：O(n)，空间复杂度：O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */

const detectCycle = (head) => {
	if (head === null || head.next === null) {
		return null;
	}
	let hashMap = new Map();
	hashMap.set(head, true);

	let cur = head.next;
	while (cur.next) {
		
		if (hashMap.has(cur)) {
			return cur;
		}

		hashMap.set(cur, true);

		cur = cur.next;
	}

	// 循环结束代表没有环
	return null;
}

// @lc code=end

