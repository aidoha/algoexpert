function longestPeak(array) {
  // Write your code here.
  let i = 1;
  let longestLength = 0;

  while (i < array.length - 1) {
    const isPeak = array[i] > array[i - 1] && array[i] > array[i + 1];
    if (!isPeak) {
      i++;
      continue;
    }

    let startCounter = i - 2;
    while (startCounter >= 0 && array[startCounter] < array[startCounter + 1]) {
      startCounter--;
    }

    let endCounter = i + 2;
    while (
      endCounter < array.length &&
      array[endCounter] < array[endCounter - 1]
    ) {
      endCounter++;
    }
    const currentLength = endCounter - startCounter - 1;
    longestLength = Math.max(longestLength, currentLength);
    i = endCounter;
  }
  return longestLength;
}
