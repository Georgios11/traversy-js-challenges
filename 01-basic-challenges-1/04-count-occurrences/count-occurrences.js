// function countOccurrences(str, char) {
//   let occurences = 0;
//   string = str.toLowerCase();
//   character = char.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (string[i] === character) occurences++;
//   }
//   return occurences;
// }
const countOccurrences = (str, char) => {
  const lowerStr = str.toLowerCase();
  const lowerChar = char.toLowerCase();
  // console.log(str.length);
  return lowerStr.split(lowerChar).length - 1;
};
module.exports = countOccurrences;
