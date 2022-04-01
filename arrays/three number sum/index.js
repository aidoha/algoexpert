// Solution 1

function threeNumberSum(array, targetSum) {
  // O (n ^ 3)
  let newArray = array.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < newArray.length; i++) {
    for (let j = i + 1; j < newArray.length; j++) {
      for (let k = j + 1; k < newArray.length; k++) {
        if (newArray[i] + newArray[j] + newArray[k] === targetSum) {
          result.push([newArray[i], newArray[j], newArray[k]]);
        }
      }
    }
  }
  return result;
}

// Solution 2
function threeNumberSum(array, targetSum) {
  // O (n ^ 2)
  let result = [];
  let newArray = array.sort((a, b) => a - b);

  for (let i = 0; i < newArray.length; i++) {
    let left = i + 1;
    let right = newArray.length - 1;
    while (left < right) {
      let currentSum = newArray[left] + newArray[right] + newArray[i];
      if (currentSum === targetSum) {
        result.push([newArray[i], newArray[left], newArray[right]]);
        left++;
        right--;
      } else if (currentSum > targetSum) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
}
