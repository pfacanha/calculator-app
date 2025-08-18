const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
const buttons = calculator.querySelectorAll("button");

function displayResult() {
  let operatorOne = "";
  let operatorTwo = "";
  let operand = "";
  let operands = ["+", "-", "*", "/"];
  let result;
  let operation = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const text = button.textContent;
      display.textContent += text;

      // TODO: display math operation
      if (text === "=") {
        result = operate(operatorOne, operand, operatorTwo);
        display.textContent = result;
        return;
      }
      if (text === "C") {
        display.textContent = "";
        return;
      }
      if (operands.includes(text)) {
        operand = text;
        operation++;
      } else if (operation < 1) {
        let operators = display.textContent.split(operand);
        operatorOne = Number(operators[0]);
        operatorTwo = Number(operators[1]);
      } else {
        temp = operate(operatorOne, operand, operatorTwo);
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
