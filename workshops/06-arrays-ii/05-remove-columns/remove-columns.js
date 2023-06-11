// YOUR CODE BELOW
const removeColumns = (originalGrid, numColumns) => {
  for (let i = 0; i < originalGrid.length; i++) {
    for (let j = 0; j < numColumns; j++) {
      originalGrid[i].pop();
    }
  }
  return originalGrid;
};
console.log(
  removeColumns(
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    1
  )
);
