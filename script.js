const display = document.getElementById("display");
// console.log(typeof display.innerText);
let operatorCount=0;
let total = 0;
let firstNumInput = "0";
let secondNumbInput = "0";
let firstValue = "";
let secondValue = "";

const numbers = document.getElementsByClassName("numbers");
for (let number of numbers) {
  number.addEventListener("click", function (e) {
    // console.log(e.target.innerText);
    if (display.innerText == "0") {
      display.innerText = "";
    }
    firstNumInput=number.innerText;
    console.log(firstNumInput);
    if(!operatorCount){
      display.innerText+=firstNumInput;
      firstNumInput=display.innerText;
      console.log(firstNumInput);
    }
    else if(operatorCount){
      // console.log(operatorCount);
      secondNumbInput=number.innerText;
      display.innerText+=secondNumbInput;

      console.log(secondNumbInput);
    }
  });
}
document.getElementById("ac").addEventListener("click", function () {
  display.innerText = 0;
  total = 0;
});

const operators = document.getElementsByClassName("operator");
for (let operator of operators) {
  operator.addEventListener("click", function (e) {
    if (
      display.innerText[display.innerText.length - 1] == "+" ||
      display.innerText[display.innerText.length - 1] == "-" ||
      display.innerText[display.innerText.length - 1] == "*" ||
      display.innerText[display.innerText.length - 1] == "/"
    ) {
      return;
    }
    if(operator.innerText == "+"){
      operatorCount++;
      firstValue=firstNumInput;
      total+=parseInt(firstValue);
      console.log(total);
      firstNumInput=0
    }

    
  });
}
const dotFloat = document.getElementById("float");

dotFloat.addEventListener("click", function (e) {
  if (display.innerText[display.innerText.length - 1] == ".") {
    return;
  }
 
});

