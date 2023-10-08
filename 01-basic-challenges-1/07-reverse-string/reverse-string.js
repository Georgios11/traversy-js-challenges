// function reverseString(str) {
//   let arr = [];
//   for (let i = str.length - 1; i >= 0; i--) arr.push(str[i]);
//   return arr.join("");
// }
///////
function reverseString(str) {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  return string;
}
/////////
// const reverseString = (str) => str.split("").reverse().join("");
module.exports = reverseString;
