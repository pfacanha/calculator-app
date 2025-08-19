const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
const buttons = calculator.querySelectorAll("button");

function displayResult() {
  let operatorOne = "";
  let operatorTwo = "";
  let operand = "";
  let operands = ["+", "-", "*", "/"];
  let result;
  let operations = 0;

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
      if (operations >= 1) {
        operatorTwo += text;
        console.log("operator two: ", operatorTwo);
        display.textContent = operatorTwo;
      } else if (operands.includes(text) && operations < 1) {
        operatorOne = display.textContent.slice(0, -1);
        console.log("operator one is: ", operatorOne);
        operand = text;
        console.log("operand is: ", operand);
        display.textContent = operatorOne;
        operations++;
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
