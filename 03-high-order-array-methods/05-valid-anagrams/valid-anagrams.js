function validAnagrams(str1, str2) {
  const string1 = str1.split("").reduce((freq, cur) => {
    freq[cur] = (freq[cur] || 0) + 1;
    return freq;
  }, {});
  const string2 = str2.split("").reduce((freq, cur) => {
    freq[cur] = (freq[cur] || 0) + 1;
    return freq;
  }, {});
  let anagram = true;

  for (let key of Object.keys(string1)) {
    console.log(string1[key], string2[key]);
    if (string1[key] !== string2[key]) {
      anagram = false;
      break;
    }
  }
  return anagram;
}

module.exports = validAnagrams;
