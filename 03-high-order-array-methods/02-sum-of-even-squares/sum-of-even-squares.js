function sumOfEvenSquares(numbers) {
  const sum = numbers.reduce((acc, cur) => {
    if (cur % 2 === 0) {
      acc = acc + cur ** 2;
    }
    return acc;
  }, 0);
  return sum;
}
module.exports = sumOfEvenSquares;
