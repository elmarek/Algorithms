/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, value) {

    // if size/storageLimit > .75
      //resize

    // create a bucket for key value
    var bucket = [key, value]
    // get index from helper function
    var index = getIndexBelowMaxForKey(key, storageLimit)
    // add the key and value to result
    if(storage[index] === undefined) {
      storage[index] = [];
      storage[index].push(bucket)
      size++
    } else {
      bucket = storage[index]
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
        } else {
          //push the result to storage array at given index
          bucket.push([key, value]);
          size++
        }
      }
    }
     //push the result to storage array at given index
  };


  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    for (let i = 0; i < bucket.length; i++) {
      if (storage[i][0] === key) {
        return storage[i][1];
      }
    }
    return undefined;
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i].splice(i, 1);
        size--
      }
    }

    //if size/storageLimit <= .25
      // resize

  };

  return result;
};
