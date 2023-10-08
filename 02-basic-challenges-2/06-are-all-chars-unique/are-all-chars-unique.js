function areAllCharactersUnique(str) {
  const unique = new Set(str);
  return unique.size === str.length;
}
// function areAllCharactersUnique(str) {
//   let characters = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (characters[char]) return false;

//     characters[char] = true;
//   }
//   return true;
// }
module.exports = areAllCharactersUnique;
