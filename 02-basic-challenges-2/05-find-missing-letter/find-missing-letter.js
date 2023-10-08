function findMissingLetter(str) {
  let alphaBet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTYVWXYZ";

  const starting = alphaBet.indexOf(str[0]);

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== alphaBet[starting + i]) {
      return alphaBet[starting + i];
    }
  }
  return "";
}

module.exports = findMissingLetter;
