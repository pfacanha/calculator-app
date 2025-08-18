const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
const buttons = calculator.querySelectorAll("button");
let operatorOne = "";
let operatorTwo = "";
let operand = "";

function displayResult() {
  let operands = ["+", "-", "*", "/"];
  let result;

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const text = button.textContent;
      // TODO: display operation in the display <div>
      if (text === "=") {
        result = operate(operatorOne, operand, operatorTwo);
        display.textContent = result;
        return;
      }
      if (text === "C") {
        display.textContent = "";
        return;
      }
      display.textContent += text;
      if (operands.includes(text)) {
        operand = text;
      } else {
        let operators = display.textContent.split(operand);
        operatorOne = Number(operators[0]);
        operatorTwo = Number(operators[1]);
      }
    });
  });
}
displayResult();

function operate(operatorOne, operand, operatorTwo) {
  let res;
  if (operand === "+") {
    res = add(operatorOne, operatorTwo);
  }
  if (operand === "-") {
    res = subtract(operatorOne, operatorTwo);
  }
  if (operand === "*") {
    res = multiply(operatorOne, operatorTwo);
  }
  if (operand === "/") {
    res = divide(operatorOne, operatorTwo);
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
