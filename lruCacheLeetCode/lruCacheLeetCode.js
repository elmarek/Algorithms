/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.head = new DoubleLinkedNode(0, null, null);
  this.tail = new DoubleLinkedNode(0, this.head, null);
  this.head.right = this.tail;
  this.capacity = capacity;
  this.dict = {};
  this.size = 0;
};

function DoubleLinkedNode(key, val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
  this.key = key;
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.key) {
    return -1;
  } else {
    console.log("LOG :", key);
    this.key.left.right = this.key.right;
    this.key.right.left = this.key.left;
    this.key.right = this.head.right;
    this.key.right = this.head.right;
    this.key.left = this.head;
    this.head.left = this.key;

    return this.key;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (!this.key && this.size < this.capacity) {
    let newNode = new DoubleLinkedNode(key, value, this.head, this.head.right);
    this.head.right = newNode;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
