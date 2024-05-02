const numbers = Array.from(document.querySelectorAll(".numbers button"));
const output = document.querySelector(".output-text");
const outputArray = [];


numbers.forEach((num) => {
  num.addEventListener("click", (n) => {
    outputArray.push(n.target.value);
    output.textContent = outputArray.join('');
  })
})

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

function operate(operator, num1, num2) {
  operator(num1, num2);
}
