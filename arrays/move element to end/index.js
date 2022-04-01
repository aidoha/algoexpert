// Solution 1
function moveElementToEnd(array, toMove) {
  // not in place method
  const withoutMoveNum = array.filter((x) => x !== toMove);
  let needToAddCount = array.length - withoutMoveNum.length;
  while (needToAddCount > 0) {
    withoutMoveNum.push(toMove);
    needToAddCount--;
  }
  return withoutMoveNum;
}

// Solution 2
function moveElementToEnd(array, toMove) {
  // in place method
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    while (left < right && array[right] === toMove) right--;
    if (array[left] === toMove) {
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
    }
    left++;
  }
  return array;
}
