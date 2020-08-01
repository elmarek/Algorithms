/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
    this.storage = {};
    this.minimum = {};
    this.size = 0;

  };


  Stack.prototype.push = function(value) {
    if(Object.values(this.storage).indexOf(value) > -1) {
      return;
    }

    // set key to length
    var key = this.size
    //add new value
    this.storage[key] = value;
    //increase size
    this.size++;
    //store value in minimum object
    this.minimum[value] = value
  };

// remove an item from the top of the stack
  Stack.prototype.pop = function() {
    // find last value
    var key = this.size - 1;
    // set it to value
    var value = this.storage[key]
    // delete last value
    delete this.storage[key];
    // decrease size
    this.size--;
    delete this.minimum[value]

    // return the value
    return value;

  };

// return the number of items in the stack
  Stack.prototype.size = function() {
    // return size
    return this.size
  };

// return the minimum value in the stack
  Stack.prototype.min = function() {
    // return min
    return Object.values(this.minimum)[0]
  };

