const numbers = Array.from(document.querySelectorAll(".numbers button"));
const output = document.querySelector(".output-text");

const num1 = [];
const numNext = [];



function getFirstNum() {
  numbers.forEach((num) => {
    num.addEventListener("click", (n) => {
      num1.push(n.target.value);
      output.textContent = num1.join('');
    })
  })
}

function getNextNum() {
  numbers.forEach((num) => {
    num.addEventListener("click", (n) => {
      numNext.push(n.target.value);
      output.textContent = numNext.join('');
    })
  })
}

plus = document.querySelector(".plus");
plus.addEventListener("click", add);
function add() {
  output.textContent = "";
  getNextNum();
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

function operate(operator, num1, num2) {
  operator(num1, num2);
}
