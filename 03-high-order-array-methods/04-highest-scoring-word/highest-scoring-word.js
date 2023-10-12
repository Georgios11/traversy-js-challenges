function highestScoringWord(str) {
  const words = str.toLowerCase().split(" ");
  let result = words.reduce((acc, cur) => {
    acc[cur] = cur
      .split("")
      .reduce((sum, cur) => sum + cur.charCodeAt(0) - 96, 0);
    return acc;
  }, {});
  let highest = result[words[0]];
  // console.log(highest);
  for (const [key, value] of Object.entries(result)) {
    if (value > highest) {
      result = key;
      // result = { [key]: value };
    }
  }

  // result = { ...result };
  return result;
}

module.exports = highestScoringWord;
