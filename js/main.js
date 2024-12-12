import { appendNumber, chooseOperation, compute, clear } from "./calculator.js";
import { getButtonValue } from "./domElements.js";

const numberButtons = document.querySelectorAll(".btn.number");
const operatorButtons = document.querySelectorAll(".btn.operator");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = getButtonValue(button);
    appendNumber(value);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const operator = getButtonValue(button);
    chooseOperation(operator);
  });
});

equalsButton.addEventListener("click", compute);

clearButton.addEventListener("click", clear);
