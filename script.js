let num1, operator, num2;

let display = document.querySelector(".output-text");
let numbers = document.querySelectorAll(".numbers button");
let displayValue = "";

function clickNumber () {
  numbers.forEach(number => {
    number.addEventListener("click", (e) => {
      displayValue += e.target.value;
      display.textContent = displayValue;
    })
  })
}

clickNumber();

const plusSign = document.querySelector(".plus");
const minusSign = document.querySelector(".minus");
const divideSign = document.querySelector(".divide");
const multiplySign = document.querySelector(".multiply");
const equals = document.querySelector(".equals");

equals.addEventListener("click", () => {
  num2 = displayValue;
  let result = operate(operationClicked, num1, num2);
  console.log(result);
  display.textContent = result;
})

let operationClicked;

// need to get operator out of plusSign to run operate on n1/n2
// new var operationClicked to hold operator

plusSign.addEventListener("click", () => {
  num1 = displayValue;
  display.textContent = "";
  displayValue = "";
  operationClicked = add;
})

// yellow operator is not taking operator perameter
// trying to use it as a fxn
function operate(operator, n1, n2) {
  return operator(n1, n2);
}

function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}




