function frequencyAnalysis(str) {
  const frequency = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    // console.log(letter);

    if (frequency[letter]) {
      frequency[letter]++;
    } else {
      frequency[letter] = 1;
    }
  }

  return frequency;
}
console.log(frequencyAnalysis("hemlal"));
