const numbers = Array.from(document.querySelectorAll(".numbers button"));
const output = document.querySelector(".output-text");

console.log(numbers[3].value)
console.log(typeof output.textContent)

// click number
// change output text to number value

numbers.forEach((num) => {
  num.addEventListener("click", (n) => {
    output.textContent = n.target.value;
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
