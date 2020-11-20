function paddingLeft(string, desLength, paddingValue = " ") {
  const paddingLenght = desLength - string.lenght;
  const result = paddingValue.repeat(paddingLenght) + string;

  return result;
}
module.exports = paddingLeft;
