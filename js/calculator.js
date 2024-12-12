import { add, subtract } from "./mathOperations.js";
import { updateDisplay } from "./domElements.js";

let currentOperand = "";
let previousOperand = "";
let operation = "";

function clear() {
  currentOperand = "";
  previousOperand = "";
  operation = "";
  updateDisplay("0");
}

function appendNumber(number) {
  currentOperand = currentOperand.toString() + number.toString();
  updateDisplay(currentOperand);
}

function chooseOperation(operator) {
  if (currentOperand === "") return;
  if (previousOperand !== "") compute();
  operation = operator;
  previousOperand = currentOperand;
  currentOperand = "";
}

function compute() {
  let result;
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);

  switch (operation) {
    case "+":
      result = add(prev, curr);
      break;
    case "-":
      result = subtract(prev, curr);
      break;
    default:
      return;
  }
  currentOperand = result;
  operation = "";
  previousOperand = "";
  updateDisplay(currentOperand);
}

export { appendNumber, chooseOperation, compute, clear };
