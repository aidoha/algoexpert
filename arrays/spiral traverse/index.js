function spiralTraverse(arr) {
  // Write your code here.
  let startRow = 0;
  let endRow = arr.length - 1;
  let startCol = 0;
  let endCol = arr[0].length - 1;
  let res = [];

  while (startRow <= endRow && startCol <= endCol) {
    // top border
    for (let col = startCol; col <= endCol; col++) {
      res.push(arr[startRow][col]);
    }

    // right border
    for (let row = startRow + 1; row <= endRow; row++) {
      res.push(arr[row][endCol]);
    }

    // bottom border
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      res.push(arr[endRow][col]);
    }

    // left border
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      res.push(arr[row][startCol]);
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return res;
}
