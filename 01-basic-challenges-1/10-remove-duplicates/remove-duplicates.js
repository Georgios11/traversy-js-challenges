// function removeDuplicates(arr) {
//   const unique = [];
//   for (let i = 0; i < arr.length; i++)
//     if (!unique.includes(arr[i])) unique.push(arr[i]);

//   return unique;
// }

function removeDuplicates(arr) {
  //   return new Array(...new Set(arr));
  return Array.from(new Set(arr));
}
module.exports = removeDuplicates;
