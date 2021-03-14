/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */

// @lc code=start
/**
 * 构造一个队列类，定义基本的指针与结构
 * @param {number} k
 */
var MyCircularQueue = function(k) {
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
 * 插入一个元素
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
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
 * 删除一个元素
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
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
 * 获取队列的首元素
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
	// 先判断当前元素是否为空
	const isEmpty = this.isEmpty();
	if (isEmpty) return -1;
	return this.que[this.head];
};

/**
 * 返回队尾元素
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
	// 先判断当前元素是否为空
	const isEmpty = this.isEmpty();
	if (isEmpty) return -1;
	return this.que[this.tail - 1];
};

/**
 * 判断列表是否为空
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
	if (this.cnt === 0) {
		return true
	} else {
		return false;
	}
};

/**
 * 判断队列是否满了
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
	if (this.cnt === this.k) {
		return true;
	} else {
		return false;
	}
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

