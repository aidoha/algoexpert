// Solution 1
function isValidSubsequence(array, sequence) {
  let mainIndex = 0;
  let seqIndex = 0;

  while (mainIndex < array.length && seqIndex < sequence.length) {
    if (array[mainIndex] === sequence[seqIndex]) {
      seqIndex++;
    }
    mainIndex++;
  }
  return seqIndex === sequence.length;
}

// Solution 2
function isValidSubsequence(array, sequence) {
  let seqIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (seqIndex === sequence.length) {
      break;
    }
    if (array[i] === sequence[seqIndex]) {
      seqIndex++;
    }
  }
  return seqIndex === sequence.length;
}
