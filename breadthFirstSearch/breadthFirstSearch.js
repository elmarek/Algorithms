class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    // Write your code here.
    let queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      array.push(current.name);
      for (var i = 0; i < current.children.length; i++) {
        queue.push(current.children[i]);
      }
    }
    return array;
  }
}
