function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else return "cant divide by 0";
}

function operate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return substract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a / b);
  }
}

const NumberButtons = document.querySelectorAll("button.number");
const DisplayDiv = document.querySelector("div.display");
let operator = "";
let total = 0;
let value1 = 0;
let value2 = 0;
let x = 0;
NumberButtons.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (DisplayDiv.textContent.length < 10) {
      if (DisplayDiv.textContent === "0" || x !== 0) {
        x = 0;
        DisplayDiv.textContent = number.textContent;
      } else DisplayDiv.textContent += number.textContent;
    }
  });
});
const ResetButton = document.querySelector("button.reset");
ResetButton.addEventListener("click", (e) => {
  DisplayDiv.textContent = "0";
  total = 0;
  value1 = 0;
  value2 = 0;
});
const Operations = document.querySelectorAll("button.operation");
Operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    const operator = operation.textContent;
    if (value1 === 0) {
      value1 = parseInt(DisplayDiv.textContent);
      x = 1;
    } else {
      value2 = parseInt(DisplayDiv.textContent);
      total = operate(value1, value2, operator);
      value1 = total;
      if (operator === "/" || "*") {
        value2 = 1;
      } else value2 = 0;

      x = 1;
      DisplayDiv.textContent = total;

      console.log(value1);
    }
  });
});

const Result = document.querySelector("button.equals");
Result.addEventListener("click", (e) => {
  AddupValue = parseInt(DisplayDiv.textContent);
  DisplayDiv.textContent = operate(total, AddupValue, operator);
});
