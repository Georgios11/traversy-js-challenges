function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0);
  const result = arr.reduce((res, cur) => {
    if (cur.charCodeAt(0) - start > 1) res = String.fromCharCode(start + 1);

    start = cur.charCodeAt(0);
    return res;
  }, "");
  return result;
}
module.exports = findMissingLetter;
