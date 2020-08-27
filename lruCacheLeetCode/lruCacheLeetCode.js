/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.head = new DoubleLinkedNode(null, null, null, this.tail);
  this.tail = new DoubleLinkedNode(null, null, this.head);
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
  // if key does not exist
  if (!this.dict[key]) {
    return -1;
  }

  // otherwise
  let foundNode = this.dict[key];

  // if its already the head, return it and thats it!
  if (foundNode === this.head) {
    return foundNode.val;
  }

  let foundNodeLeft = foundNode.left;
  let foundNodeRight = foundNode.right;

  // if node is the tail reassign tail
  if (foundNode === this.tail) {
    this.tail = foundNode.left;
    this.tail.right = null;
  } else {
    foundNodeLeft.right = foundNodeRight;
    foundNodeRight.left = foundNodeLeft;
  }

  this.head.left = foundNode;
  foundNode.right = this.head;
  foundNode.left = null;
  this.head = foundNode;
  this.head.left = null;
  return foundNode.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */

LRUCache.prototype.put = function (key, val) {
  if (this.dict[key] === this.head) {
    this.dict[key].val = val;
    return;
  }

  let newNode = new DoubleLinkedNode(key, val);

  // if it doesnt exist
  if (this.dict[key] === undefined) {
    newNode = new DoubleLinkedNode(key, val);
  } else if (this.dict[key] && this.dict[key] !== this.head) {
    // NEED collision case  !!!!!!!!!!!! LISA LOOK HERE
    console.log(this.dict[key]);
    // let foundNode = this.dict[key]
    // let foundNodeLeft = foundNode.left
    // console.log(foundNodeLeft)
    // let foundNodeRight = foundNode.right
    // foundNodeLeft.right = foundNodeRight
    // foundNodeRight.left = foundNodeLeft
    // this.size--
  }

  // if list is empty assign tail and head
  if (this.size === 0) {
    this.head = newNode;
    this.tail = newNode;
    this.dict[key] = newNode;
    this.size++;
    return;
  }

  // if at capacity remove tail and delete the node from dict
  if (this.size === this.capacity) {
    //  console.log(this.size, this.capacity, "Im in here!!!")
    let dictVal = this.tail.key;
    delete this.dict[dictVal];
    this.tail = this.tail.left;
    this.size--;
  }

  // add the new node to the head
  let referencedHead = this.head;
  this.head.left = newNode;
  this.head = newNode;
  this.head.right = referencedHead;
  this.dict[key] = newNode;
  this.size++;

  return;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
