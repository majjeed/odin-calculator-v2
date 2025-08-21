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
let shouldResetDisplay = null;

let btnNodeList = document.querySelectorAll("button");

for (btn of btnNodeList) {
  //btn.addEventListener("click", (e) => console.log(e.target.textContent));
  btn.addEventListener("click", (e) => {
    let result = logicFlow(e.target);
    console.log(result);
  });
}

function logicFlow(target) {
  let targetContent = target.textContent;
  let targetClass = target.className;
  // if an operator has not been clicked yet then append or change firstOperand
  // else change secondOperand or append to it

  if (targetContent === "=" || targetContent === "C") {
    if (target.id === "clear") {
      firstOperand = null;
      secondOperand = null;
      currentOperator = null;
      shouldResetDisplay = null;
    } else {
      let result = operate(currentOperator, firstOperand, secondOperand);
      firstOperand = result;
      currentOperator = null;
      secondOperand = null;
      return result;
    }
  } else if (targetClass === "digit") {
    if (currentOperator === null) {
      if (firstOperand === null) {
        firstOperand = targetContent;
      } else {
        // remember to string concat at this stage and not math add
        firstOperand = firstOperand.concat(targetContent);
      }
    } else {
      if (secondOperand === null) {
        secondOperand = targetContent;
      } else {
        // remember to string concat at this stage and not math add
        secondOperand = secondOperand.concat(targetContent);
      }
    }
  } else if (targetClass === "operator") {
    //do something else for operators
    if (currentOperator === null) {
      currentOperator = targetContent;
    } else {
      let result = operate(currentOperator, firstOperand, secondOperand);
      firstOperand = result;
      currentOperator = targetContent;
      secondOperand = null;
      return result;
    }
  }

  return `firstOperand = ${firstOperand}; \n secondOperand = ${secondOperand}; \n currentOperator = ${currentOperator};`;
}
