// YOUR CODE BELOW
const myReverse = (orgArr) => {
  let revArr = [];
  for (let i = orgArr.length - 1; i >= 0; i--) {
    let ele = orgArr[i];
    revArr.push(ele);
  }
  return revArr;
};
