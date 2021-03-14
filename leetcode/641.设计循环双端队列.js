/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
	this.k = k;
	// 设置长度为 k 的数组
	this.que = new Array(k);
	// 存储元素的数量
	this.cnt = 0;
	// 建立头指针和尾指针
	this.head = 0;
	this.tail = 0;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
	// 先判断当前元素是否已经满了
	const isFull = this.isFull();
	if (isFull) return false;
	// 判断头指针当前是否指向第一个节点
	if (this.head === 0) {
		this.head = this.k - 1;
	} else {
		this.head--;
	}
	this.que[this.head] = value;
	this.cnt++;
	return true
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
	// 先判断当前元素是否已经满了
	const isFull = this.isFull();
	if (isFull) return false;
	// 判断尾指针是否已经是最后一位了
	if (this.tail === this.k) {
		this.tail = 0;
	}
	this.que[this.tail] = value;
	this.tail++;
	this.cnt++;
	return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
	// 先判断当前元素是否为空
	const isEmpty = this.isEmpty();
	if (isEmpty) return false;
	this.cnt--;
	if (this.head === (this.k - 1)) {
		this.head = 0;
	} else {
		this.head++;
	}
	return true
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
	// 先判断当前元素是否为空
	const isEmpty = this.isEmpty();
	if (isEmpty) return false;
	this.cnt--;
	if (this.tail === 0) {
		this.tail = this.k - 1;
	} else {
		this.tail--;
	}
	return true
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
	// 先判断当前元素是否为空
	const isEmpty = this.isEmpty();
	if (isEmpty) return -1;
	return this.que[this.head];
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
	// 先判断当前元素是否为空
	const isEmpty = this.isEmpty();
	if (isEmpty) return -1;
	return this.que[(this.tail - 1 + this.k) % this.k];
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
	if (this.cnt === 0) {
		return true
	} else {
		return false;
	}
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
	if (this.cnt === this.k) {
		return true;
	} else {
		return false;
	}
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

