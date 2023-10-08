// function findFirstNonRepeatingCharacter(str) {
//   for (let i = 0; i < str.length - 1; i++) {
//     if (str[i] === str[i + 1]) {
//       i++;
//       continue;
//     }
//     return str[i];
//   }
//   return null;
// }
function findFirstNonRepeatingCharacter(str) {
  const characters = {};
  for (char of str) {
    characters[char] = (characters[char] || 0) + 1;
  }
  for (char of str) {
    if (characters[char] === 1) return char;
  }
  return null;
}
module.exports = findFirstNonRepeatingCharacter;
