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
        // 1) if clicks grab the first part of the string and store in the first operator
        operatorOne = Number(display.textContent.slice(0, -1));
        // 2) assign the current value to the operand variable
        operand = text;
        // 3) keep the current value displayed in the screen
        display.textContent = operatorOne;
        // 4) increase variable operation to count the numbers of operations
        operation++;
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
