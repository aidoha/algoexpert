function isMonotonic(array) {
  // Write your code here.
  if (array.length <= 2) return true;
  let increaseCounter = 0;
  let decreaseCounter = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= array[i + 1]) {
      decreaseCounter++;
    }
    if (array[i] <= array[i + 1]) {
      increaseCounter++;
    }
  }

  if (decreaseCounter > 0 && decreaseCounter >= increaseCounter) {
    return decreaseCounter + 1 === array.length;
  }
  if (increaseCounter > 0 && increaseCounter >= decreaseCounter) {
    return increaseCounter + 1 === array.length;
  }
}
