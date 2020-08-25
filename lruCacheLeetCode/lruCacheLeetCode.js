/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.head = new DoubleLinkedNode(null, null, null, this.tail);
  this.tail = new DoubleLinkedNode(null, null, this.head, null);
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
  if (!this.dict[key]) {
    return -1;
  } else {
    let previousHead = this.head;
    this.head.left = this.dict[key];
    previousHead.left = this.head;
    // this.head = this.key.righ
    // this.key.right.left = this.key.left
    // this.key.right = this.head.right
    // this.key.right = this.head.right
    // this.key.left = this.head
    // this.head.left = this.key
    return this.dict[key].val;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, val) {
  if (!this.head.right.val) {
    this.head.key = key;
    this.head.val = val;
    this.dict[key] = new DoubleLinkedNode(key, val, null, null);
    this.size++;
    return;
  }
  // if there is capacity and key does not exist
  if (!this.dict.key && this.size < this.capacity) {
    let previousHead = this.head;
    this.tail.left;
    let newNode = new DoubleLinkedNode(key, val, null, previousHead);
    this.head = newNode;
    previousHead.left = this.head;
    this.head = newNode;
    this.dict[key] = newNode;
    console.log("DICT below cap :", Object.keys(this.dict));
    this.size++;
    // else if the key does not exist and cache is at max capacity
  } else if (!this.dict.key && this.size === this.capacity) {
    let newNode = new DoubleLinkedNode(key, val, null, this.head);
    // assign current head left to new head
    this.head.left = newNode;
    //update head
    this.head = newNode;
    //remove last node
    let lastNode = this.tail.left;

    lastNode = this.tail;
    this.tail.left = lastNode.left;
    //console.log("TAIL :", this.tail.left)
    this.tail.right = null;
    let LastNodeKey = this.tail.key;
    //delete last node from dictionary
    console.log("List prior to delete : ", LastNodeKey);
    delete this.dict[LastNodeKey];
    // assign tail left to second to last node
    console.log("DICT AFTER DELETE :", Object.keys(this.dict));
    this.tail = this.tail.left;
    this.dict[key] = newNode;
    this.size++;
  }
  console.log("List :", this.head);
  return;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
