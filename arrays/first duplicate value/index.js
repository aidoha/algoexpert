// Solution 1

function firstDuplicateValue(array) {
  let map = new Map();
  for (let num of array) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  let max = { num: undefined, value: -Infinity };
  for (let key of map) {
    if (key[1] > max.value) {
      max.value = key[1];
      max.num = key[0];
    }
  }
  return max.value === 1 ? -1 : max.num;
}

// Solution 2
function firstDuplicateValue(array) {
  // using set
  let set = new Set();

  for (let num of array) {
    if (set.has(num)) {
      return num;
    }
    set.add(num);
  }

  return -1;
}
