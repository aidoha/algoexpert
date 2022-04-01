// Solution 1
function arrayOfProducts(array) {
  // Write your code here.
  let answer = [];
  let leftProducts = [];
  leftProducts[0] = 1;
  let rightProducts = [];
  rightProducts[array.length - 1] = 1;

  for (let i = 1; i < array.length; i++) {
    leftProducts[i] = array[i - 1] * leftProducts[i - 1];
  }

  for (let i = array.length - 2; i >= 0; i--) {
    rightProducts[i] = array[i + 1] * rightProducts[i + 1];
  }
  for (let i = 0; i < leftProducts.length; i++) {
    answer[i] = leftProducts[i] * rightProducts[i];
  }
  return answer;
}

// Solution 2
function arrayOfProducts(array) {
  // Write your code here.
  let leftProducts = new Array(array.length).fill(1);
  let rightProducts = new Array(array.length).fill(1);
  let result = new Array(array.length).fill(1);

  let leftSum = 1;
  for (let i = 0; i < array.length; i++) {
    leftProducts[i] = leftSum * leftProducts[i];
    leftSum *= array[i];
  }

  let rightSum = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    rightProducts[i] = rightSum * rightProducts[i];
    rightSum *= array[i];
  }

  for (let i = 0; i < result.length; i++) {
    result[i] = leftProducts[i] * rightProducts[i];
  }

  return result;
}

// Solution 3
function arrayOfProducts(array) {
  // brute force O(n^2)
  let product = 1;
  let result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        product *= array[j];
      }
    }
    result.push(product);
    product = 1;
  }
  return result;
}
