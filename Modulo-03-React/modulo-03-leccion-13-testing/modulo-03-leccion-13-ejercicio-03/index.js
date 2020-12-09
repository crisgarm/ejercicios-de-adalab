function paddingLeft(string, desLength, paddingValue = " ") {
  while (string.length < desLength) {
    string = paddingValue + string;
  }
  return string;
}
module.exports = paddingLeft;
