/*
 * @Author: your name
 * @Date: 2021-03-14 23:15:47
 * @LastEditTime: 2021-03-14 23:20:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \suanfa\leetcode\933.最近的请求次数.js
 */
/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function() {
	// 设置长度为 k 的数组
	this.que = [];
	// 存储元素的数量
	this.cnt = 0;
	// 建立头指针和尾指针
	this.head = 0;
	this.tail = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
	this.cnt++;
	while (t - this.que[this.head] > 3000) {
		this.head++;
		this.cnt--;
	}
	this.que[this.tail] = t;
	this.tail++;
	return this.cnt;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

