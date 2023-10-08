function titleCase(str) {
  const words = str
    .toLowerCase()
    .split(" ")
    .map((el) => el.slice(0, 1).toUpperCase().concat(el.slice(1).toLowerCase()))
    .join(" ");
  return words;
}

module.exports = titleCase;
