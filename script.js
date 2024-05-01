const output = document.querySelector(".output-text");
const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numArray.forEach((num) => document.querySelector(num))

// function to put 1st number in output

function num1(arr) {
  arr.forEach((num) =>{
    num.addEventSelector("click", () => {
      output.append(num);
    })
  })
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

function operate(operator, num1, num2) {
  operator(num1, num2);
}
