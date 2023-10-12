function validatePassword(pwd) {
  let password = pwd.split("");

  const length = password.length >= 8;
  const upper = password.some(
    (char) => char === char.toUpperCase() && char !== char.toLowerCase()
  );
  const lower = password.some(
    (char) => char === char.toLowerCase() && char !== char.toUpperCase()
  );
  const digit = password.some((dig) => !isNaN(dig));

  return length && upper && lower && digit;
  return result;
}

module.exports = validatePassword;
