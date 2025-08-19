const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
const buttons = calculator.querySelectorAll("button");

let operatorOne = "";
let operatorTwo = "";
let operand = "";
let operands = ["+", "-", "*", "/"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let operandFound = false;
let content = "";
let result;

function displayResult() {
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      let text = button.textContent;

      if (text === "=") {
        res = calculateResult(operatorOne, operand, operatorTwo);
        display.textContent = res;
        return;
      }

      if (text === "C") {
        clearInput();
        return;
      }

      if (operands.includes(text)) {
        if (operandFound) {
          res = calculateResult(operatorOne, operand, operatorTwo);
          operand = text;
          operatorOne = res;
          operatorTwo = "";
          operandFound = true;
          display.textContent = res;
        } else {
          operand = text;
          operandFound = true;
          text = "";
        }
      }

      if (numbers.includes(text) || text === ".") {
        if (operand) {
          operatorTwo += text;
          display.textContent = operatorTwo;
        } else {
          operatorOne += text;
          display.textContent = operatorOne;
        }
      }

      console.log("display.textContent is: ", display.textContent);
      console.log("operatorOne is: ", operatorOne);
      console.log("operand is: ", operand);
      console.log("operatorTwo is: ", operatorTwo);
      console.log("operandFound is: ", operandFound);
    });
  });
}

displayResult();

function calculateResult(operatorOne, operand, operatorTwo) {
  res = operate(Number(operatorOne), operand, Number(operatorTwo));
  if (res % 1 !== 0) {
    res = res.toFixed(2);
  }
  return res;
}

function clearInput() {
  display.textContent = "";
  operatorOne = "";
  operatorTwo = "";
  content = "";
  result = "";
}

function operate(operatorOne, operand, operatorTwo) {
  let res;

  switch (operand) {
    case "+":
      res = add(operatorOne, operatorTwo);
      break;
    case "-":
      res = subtract(operatorOne, operatorTwo);
      break;
    case "*":
      res = multiply(operatorOne, operatorTwo);
      break;
    case "/":
      res = divide(operatorOne, operatorTwo);
      break;
    default:
      res = null;
  }

  return res;
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
