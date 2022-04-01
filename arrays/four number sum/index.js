function fourNumberSum(array, targetSum) {
  // Write your code here.
  const result = [];
  let allPairSums = {};

  for (let i = 1; i < array.length - 1; i++) {
    for (let k = i + 1; k < array.length; k++) {
      const sumOfTwo = array[i] + array[k];
      const minusElement = targetSum - sumOfTwo;
      if (minusElement in allPairSums) {
        for (const pair of allPairSums[minusElement]) {
          result.push(pair.concat([array[i], array[k]]));
        }
      }
    }

    for (let j = 0; j < i; j++) {
      const sumOfTwo = array[i] + array[j];

      if (!(sumOfTwo in allPairSums)) {
        allPairSums[sumOfTwo] = [[array[i], array[j]]];
      } else {
        allPairSums[sumOfTwo].push([array[i], array[j]]);
      }
    }
  }
  return result;
}
