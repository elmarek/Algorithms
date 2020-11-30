class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    // if value is less than current value
    if (value < this.value) {
      // if left is null create new node with value
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        //otherwise traverse BST until you find null left value
        this.left.insert(value);
      }
    }
    if (value >= this.value) {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }

  contains(value) {
    // Write your code here.
    if (this.value === value) {
      return true;
    }
    if (this.value !== value) {
      if (value < this.value && this.left) {
        return this.left.contains(value);
      }
      if (value > this.value && this.right) {
        return this.right.contains(value);
      }
    }
    return false;
  }

  remove(value, parent = null) {
    // Write your code here.
    // Do not edit the return statement of this method.
    // find the value
    if (value < this.value) {
      if (this.left !== null) {
        this.left.remove(value, this);
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        this.right.remove(value, this);
      }
      // otherwise we found the value
    } else {
      if (this.left !== null && this.right !== null) {
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else if (parent === null) {
        if (this.left !== null) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right !== null) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {
          // single node do nothing
        }
      } else if (parent.left === this) {
        parent.left = this.left !== null ? this.left : this.right;
      } else if (parent.right === this) {
        parent.right = this.left !== null ? this.left : this.right;
      }
    }

    // traverse tree
    return this;
  }

  getMinValue() {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.getMinValue();
    }
  }
}
