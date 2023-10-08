function findMissingNumber(arr) {
  if (arr.length === 0) return 1;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) if (arr[i] !== i + 1) return i + 1;
}

module.exports = findMissingNumber;
