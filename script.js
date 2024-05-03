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

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  num1 = null;
  num2 = null;
  operator = null;
  displayValue = "";
  display.textContent = "0";
})

const equals = document.querySelector(".equals");

let result, operationClicked;

equals.addEventListener("click", () => {
  num2 = displayValue;
  let result = operate(operationClicked, num1, num2);
  console.log(result);
  display.textContent = result;
  displayValue = result;
})

function operate(operator, n1, n2) {
  return operator(n1, n2);
}

function add(n1, n2) {
  return +n1 + +n2;
}

const plusSign = document.querySelector(".plus");

plusSign.addEventListener("click", () => {
  num1 = displayValue;
  display.textContent = "";
  displayValue = "";
  operationClicked = add;
})

function subtract(n1, n2) {
  return +n1 - +n2;
}

const minusSign = document.querySelector(".minus");

minusSign.addEventListener("click", () => {
  num1 = displayValue;
  display.textContent = "";
  displayValue = "";
  operationClicked = subtract;
})

function multiply(n1, n2) {
  return +n1 * +n2;
}

const multiplySign = document.querySelector(".multiply");

multiplySign.addEventListener("click", () => {
  num1 = displayValue;
  display.textContent = "";
  displayValue = "";
  operationClicked = multiply;
})

function divide(n1, n2) {
  return +n1 / +n2;
}

const divideSign = document.querySelector(".divide");

divideSign.addEventListener("click", () => {
  num1 = displayValue;
  display.textContent = "";
  displayValue = "";
  operationClicked = divide;
})




