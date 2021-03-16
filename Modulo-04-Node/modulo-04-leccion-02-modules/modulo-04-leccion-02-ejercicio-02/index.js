const math = require("./math");

const firstNumber = 23;
const secondNumber = 5;
const addNumbers = math.addNumbers(firstNumber, secondNumber);
const subNumbers = math.subNumbers(firstNumber, secondNumber);

console.log(
  `La suma de los números ${firstNumber} y ${secondNumber} es ${addNumbers}`
);
console.log(
  `La resta de los números ${firstNumber} y ${secondNumber} es ${subNumbers}`
);
