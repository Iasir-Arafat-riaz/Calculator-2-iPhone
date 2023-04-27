const display = document.getElementById("display");
// console.log(typeof display.innerText);
let operatorCount = false;
let total = 0;
let firstNumInput = "";
let secondNumbInput = "";
let firstValue = 0;
let secondValue = 0;
let hasFirstValue = false;
var operatorSign = "";
let inputAfterEqual = false;

const numbers = document.getElementsByClassName("numbers");
for (let number of numbers) {
  number.addEventListener("click", function () {
    // console.log(e.target.innerText);
    if (
      display.innerText.includes(".") &&
      number.innerText == "." &&
      !operatorCount
    ) {
      return;
    }
    if (
      secondNumbInput.includes(".") &&
      number.innerText == "." &&
      operatorCount
    ) {
      return;
    }

    if (!hasFirstValue && !operatorCount) {
      if (display.innerText == "0" && number.innerText == "0") {
        return;
      }
      firstNumInput += number.innerText;
      display.innerText = firstNumInput;
      firstValue = parseFloat(firstNumInput);
      // hasFirstValue=true;
    } else if (hasFirstValue && operatorCount) {
      if (display.innerText == "0" && number.innerText == "0") {
        return;
      }
      secondNumbInput += number.innerText;
      display.innerText = secondNumbInput;
      secondValue = parseFloat(secondNumbInput);
    }
  });
}
document.getElementById("ac").addEventListener("click", function () {
  display.innerText = 0;
  total = 0;
  operatorCount = false;
  firstNumInput = "";
  secondNumbInput = "";
  firstValue = 0;
  secondValue = 0;
  hasFirstValue = false;
});

const operator = (symbol) => {
  if (!operatorCount) {
    operatorSign = symbol;
    hasFirstValue = true;
    operatorCount = true;
    console.log(symbol);
  } else if (operatorCount && hasFirstValue) {
    if (operatorSign == "+") {
      total = firstValue + secondValue;
      console.log(total);
    }
    if (operatorSign == "-") {
      total = firstValue - secondValue;
    }
    if (operatorSign == "*") {
      total = firstValue * secondValue;
    }
    if (operatorSign == "/") {
      total = firstValue / secondValue;
    }
    if (symbol == "=") {
      // console.log("test");
      operatorCount = false;
      inputAfterEqual = true;
      firstNumInput = "";
      hasFirstValue = false;
    }

    secondValue = 0;
    display.innerText = total;
    console.log(firstValue, secondValue);
    firstValue = total;
    secondNumbInput = "";
    operatorSign = symbol;
    operatorCount = false;
  }
};
