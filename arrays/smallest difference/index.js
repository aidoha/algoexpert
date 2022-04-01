// Solution 1
function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  let minDifference = {
    value: Infinity,
    array: [],
  };
  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      if (Math.abs(arrayOne[i] - arrayTwo[j]) < minDifference.value) {
        minDifference.value = Math.abs(arrayOne[i] - arrayTwo[j]);
        minDifference.array = [arrayOne[i], arrayTwo[j]];
      }
    }
  }
  return minDifference.array;
}

// Solution 2
function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let onePointer = 0;
  let twoPointer = 0;
  let smallest = Infinity;
  let current = 0;
  let res = [];

  while (onePointer < arrayOne.length && twoPointer < arrayTwo.length) {
    let firstNum = arrayOne[onePointer];
    let secondNum = arrayTwo[twoPointer];

    if (firstNum < secondNum) {
      onePointer++;
      current = secondNum - firstNum;
    } else if (secondNum < firstNum) {
      twoPointer++;
      current = firstNum - secondNum;
    } else {
      return [firstNum, secondNum];
    }

    if (current < smallest) {
      smallest = current;
      res = [firstNum, secondNum];
    }
  }

  return res;
}
