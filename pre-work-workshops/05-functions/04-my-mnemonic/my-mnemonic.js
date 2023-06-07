// YOUR CODE BELOW
const myMnemonic = (...strings) => {
  let mnemonic = "";
  for (let i = 0; i < strings.length; i++) {
    if (strings[i] && typeof strings[i] === "string") {
      mnemonic += strings[i][0];
    }
  }
  return mnemonic;
};
