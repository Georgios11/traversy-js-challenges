// function countVowels(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i].toLowerCase())) count++;
//   }
//   return count;
// }

const vowels = ["a", "e", "i", "o", "u"];

const countVowels = (str) => {
  let count = 0;
  const lower = str
    .toLowerCase()
    .split("")
    .forEach((element) => vowels.includes(element) && count++);
  return count;
};
module.exports = countVowels;
