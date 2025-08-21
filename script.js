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
  a = Number(a);
  b = Number(b);
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
let shouldResetDisplay = false;

let btnNodeList = document.querySelectorAll("button");
let display = document.querySelector("#display");

for (let btn of btnNodeList) {
  btn.addEventListener("click", (e) => {
    let result = logicFlow(e.target);
    console.log(result);
  });
}

function logicFlow(target) {
  let targetContent = target.textContent;
  let targetClass = target.className;
  let resultMessage = "";

  if (target.id === "clear") {
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    shouldResetDisplay = false;
    resultMessage = "0";
  } else if (targetContent === "=") {
    let result = operate(currentOperator, firstOperand, secondOperand);
    if (result === "Error") {
      resultMessage = "Nope 🤨";
      firstOperand = null;
      secondOperand = null;
      currentOperator = null;
    } else {
      resultMessage = result;
      firstOperand = result;
      secondOperand = null;
      currentOperator = null;
      shouldResetDisplay = true;
    }
  } else if (targetClass === "digit") {
    if (shouldResetDisplay) {
      firstOperand = targetContent;
      shouldResetDisplay = false;
    } else if (currentOperator === null) {
      if (firstOperand === null) {
        firstOperand = targetContent;
      } else {
        firstOperand = firstOperand.toString().concat(targetContent);
      }
    } else {
      if (secondOperand === null) {
        secondOperand = targetContent;
      } else {
        secondOperand = secondOperand.toString().concat(targetContent);
      }
    }
  } else if (targetClass === "operator") {
    if (currentOperator === null) {
      currentOperator = targetContent;
    } else if (secondOperand !== null) {
      let result = operate(currentOperator, firstOperand, secondOperand);
      firstOperand = result;
      currentOperator = targetContent;
      secondOperand = null;
      resultMessage = result;
    }
  }

  // update display safely
  display.textContent = resultMessage || secondOperand || firstOperand || "0";

  return `firstOperand = ${firstOperand}; \n secondOperand = ${secondOperand}; \n currentOperator = ${currentOperator};`;
}
