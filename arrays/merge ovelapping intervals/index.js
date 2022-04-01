function mergeOverlappingIntervals(array) {
  let result = [];

  const sortedArray = array.sort((a, b) => a[0] - b[0]);
  let currentInterval = sortedArray[0];
  result.push(currentInterval);
  for (let nextInterval of array) {
    const [_, currentIntervalEnd] = currentInterval;
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (currentIntervalEnd >= nextIntervalStart) {
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    } else {
      currentInterval = nextInterval;
      result.push(currentInterval);
    }
  }
  return result;
}
