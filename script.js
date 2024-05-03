let num1, operator, num2;

let display = document.querySelector(".output-text");
let numbers = document.querySelectorAll(".numbers button");
let displayValue = "";

function clickNumber () {
  numbers.forEach(number => {
    number.addEventListener("click", (e) => {
      display.textContent += e.target.value;
      displayValue += e.target.value;
    })
  })
}

clickNumber();

const plusSign = document.querySelector(".plus");
const minusSign = document.querySelector(".minus");
const divideSign = document.querySelector(".divide");
const multiplySign = document.querySelector(".multiply");

plusSign.addEventListener("click", () => {
  num1 = displayValue;
  display.textContent = "";
  displayValue = "";
  operator = add;
})

function operate(operator, n1, n2) {
  operator(n1, n2);
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




