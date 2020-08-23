var mergeTwoLists = function (l1, l2) {
  let mergedList;

  if (!l1 && !l2) {
    return null;
  } else if (!l1 && l2) {
    return l2;
  } else if (!l2 && l1) {
    return l1;
  }

  if (l1.val <= l2.val) {
    mergedList = l1;
    l1 = l1.next;
  } else {
    mergedList = l2;
    l2 = l2.next;
  }

  let pointer = mergedList;

  // traverse
  let traverser = (l1, l2) => {
    if (!l2 || !l1) {
      if (l2) {
        pointer.next = l2;
      } else if (l1) {
        pointer.next = l1;
      }
      return;
    }
    // compare current value of l1 vs l2
    if (l1.val < l2.val) {
      //  add the current value
      pointer.next = l1;
      pointer = pointer.next;
      traverser(l1.next, l2);
    } else {
      // else l2 is smaller
      pointer.next = l2;
      pointer = pointer.next;
      traverser(l1, l2.next);
    }
  };

  // initialize recursive function2
  traverser(l1, l2);

  // return merged list
  return mergedList;
};
