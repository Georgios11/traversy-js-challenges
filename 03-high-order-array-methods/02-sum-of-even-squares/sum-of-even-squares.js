function sumOfEvenSquares(arr) {
  const result = arr.reduce(
    (acc, cur) => (cur % 2 === 0 ? acc + cur ** 2 : acc),
    0
  );
  return result;
}
module.exports = sumOfEvenSquares;
