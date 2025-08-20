// main.js
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
const buttons = calculator.querySelectorAll("button");

let operandOne = "";
let operandTwo = "";
let operator = "";
let operands = ["+", "-", "*", "/"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let operandFound = false;

function displayResult() {
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      let text = button.textContent;

      if (text === "=") {
        if (!operandOne || !operandTwo) {
          return;
        }
        let res = calculateResult(operandOne, operator, operandTwo);
        display.textContent = res;

        operandOne = res === 0 ? "" : String(res);
        operandTwo = "";
        operator = "";
        operandFound = false;
        return;
      }

      if (text === "C") {
        clearInput();
        return;
      }

      if (operands.includes(text)) {
        if (operandFound) {
          let res = calculateResult(operandOne, operator, operandTwo);
          display.textContent = res;

          operator = text;
          operandOne = String(res);
          operandTwo = "";
          operandFound = true;
        } else {
          operator = text;
          operandFound = true;
          text = "";
        }
      }

      if (numbers.includes(text) || text === ".") {
        if (operator) {
          operandTwo += text;
          display.textContent = operandTwo;
        } else {
          operandOne += text;
          display.textContent = operandOne;
        }
      }

      console.log("display.textContent is: ", display.textContent);
      console.log("operandOne is: ", operandOne);
      console.log("operator is: ", operator);
      console.log("operandTwo is: ", operandTwo);
      console.log("operandFound is: ", operandFound);
    });
  });
}

displayResult();

function calculateResult(operandOne, operator, operandTwo) {
  let res = operate(Number(operandOne), operator, Number(operandTwo)); // ← local
  if (res % 1 !== 0) {
    res = res.toFixed(2);
  }
  return res;
}

function clearInput() {
  display.textContent = "";
  operandOne = "";
  operandTwo = "";
  operator = "";
  operandFound = false;
}

function operate(operandOne, operator, operandTwo) {
  let res;

  switch (operator) {
    case "+":
      res = add(operandOne, operandTwo);
      break;
    case "-":
      res = subtract(operandOne, operandTwo);
      break;
    case "*":
      res = multiply(operandOne, operandTwo);
      break;
    case "/":
      res = divide(operandOne, operandTwo);
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
