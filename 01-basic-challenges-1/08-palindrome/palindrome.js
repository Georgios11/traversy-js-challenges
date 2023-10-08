// function isPalindrome(str) {
//   const formatted = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const reversed = formatted.split("").reverse().join("");
//   //   if (reversed === str.toLowerCase().replaceAll(" ", "")) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   //   return reversed === str.toLowerCase().replaceAll(" ", "") ? true : false;
//   //   return str.toLowerCase().replaceAll(" ", "");
//   //   console.log(str.toLowerCase().replace(/[^a-z0-9]/g, ""));
//   //   console.log(reversed);
//   if (reversed === str.toLowerCase().replaceAll(" ", "")) {
//     return true;
//   } else {
//     return false;
//   }
// }
function removeNonAlplaNumeric(str) {
  let formattedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) formattedStr += char;
  }
  return formattedStr;
}
function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}
function isPalindrome(str) {
  const formattedStr = removeNonAlplaNumeric(str.toLowerCase());
  const reversedStr = reverseString(formattedStr);
  return reversedStr === formattedStr;
}
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
module.exports = isPalindrome;
