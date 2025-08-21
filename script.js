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
  if (b === 0) return "Error";
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let shouldResetDisplay = null;

let btnNodeList = document.querySelectorAll("button");

for (btn of btnNodeList) {
  btn.addEventListener("click", (e) => console.log(e.target.textContent));
}

function logicFlow(target) {
  // check if event target is a number or an operator
  if (target.className === "digit") {
    // do something for digits
    if (firstOperand === null) {
    } else {
      //no need to check for second operand
    }
  } else if (target.className === "operator") {
    //do something else for operators
    if (currentOperator === null) {
      // do something
    } else {
      // calculate something
    }
  }
}
