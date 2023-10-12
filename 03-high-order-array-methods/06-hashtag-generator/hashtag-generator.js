function generateHashtag(str) {
  let tag = str.trim();
  if (tag.length === 0 || tag.length >= 140) return false;
  let hastag = tag
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase().concat(word.slice(1)))
    .join("");
  let result = "#" + hastag;
  return result;
}
module.exports = generateHashtag;
