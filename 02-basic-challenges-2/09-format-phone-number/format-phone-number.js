function formatPhoneNumber(num) {
  const areaCode = num.slice(0, 3).join("");
  const prefix = num.slice(3, 6).join("");
  const lineNumber = num.slice(6).join("");
  return `(${areaCode}) ${prefix}-${lineNumber}`;

  // const formatted = num.join("");
  // return `(${formatted.substring(0, 3)}) ${formatted.substring(
  //   3,
  //   6
  // )} ${formatted.substring(6)}`;
}

module.exports = formatPhoneNumber;
