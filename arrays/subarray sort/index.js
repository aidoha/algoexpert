function subarraySort(array) {
  let smallest = Infinity;
  let largest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (isOutOfOrder(i, array[i], array)) {
      smallest = Math.min(smallest, array[i]);
      largest = Math.max(largest, array[i]);
    }
  }

  if (smallest === Infinity) {
    return [-1, -1];
  }

  let leftIndex = 0;
  while (array[leftIndex] <= smallest) {
    leftIndex++;
  }

  let rightIndex = array.length - 1;
  while (array[rightIndex] >= largest) {
    rightIndex--;
  }

  return [leftIndex, rightIndex];
}

const isOutOfOrder = (i, num, array) => {
  if (i === 0) return num > array[i + 1];
  if (i === array.length) return num < array[i - 1];
  return num > array[i + 1] || num < array[i - 1];
};
