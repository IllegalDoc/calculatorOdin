function add(a, b) {
  // THESE ARE THE BASIC FUNCTIONS TO OPERATE
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
  } else return "لا اظن ان امك تحبك";
}

function operate(a, b, operator) {
  // THIS IS THE OPERATE FUNCTION THAT USES THE ABOVE FUNCTIONS
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return substract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

const NumberButtons = document.querySelectorAll("button.number");
const DisplayDiv = document.querySelector("div.display");
const DisplayContent = DisplayDiv.textContent;
// THESE ARE THE VARIABLES NEEDED AS OF NOW
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
  //RESET VALUE WITH TOTAL ERASING OF DATA
  DisplayDiv.textContent = "0";
  total = 0;
  value1 = 0;
  value2 = 0;
});
const Operations = document.querySelectorAll("button.operation"); //FOUR OPERATION BUTTONS +-/*
Operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (value1 === 0) {
      operator = operation.textContent;
      // THIS IS MADE IN CASE WE JUST STARTED, FIRST INPUT
      value1 = Number(DisplayDiv.textContent);
      x = 1;
    } else {
      // THIS IS WHEN OPERATIONS START,
      value2 = Number(DisplayDiv.textContent);

      total = operate(value1, value2, operator);

      console.log(value1);
      console.log(value2);
      value1 = total;
      operator = operation.textContent;
    }

    x = 1;

    DisplayDiv.textContent = value1;
  });
});

const Result = document.querySelector("button.equals");
Result.addEventListener("click", (e) => {
  value2 = Number(DisplayDiv.textContent);
  DisplayDiv.textContent = operate(value1, value2, operator);
  value1 = operate(value1, value2, operator);
});

const floatButton = document.querySelector("button.float");
floatButton.addEventListener("click", (e) => {
  if (!DisplayDiv.textContent.includes(".")) {
    DisplayDiv.textContent += ".";
  }
});

const negativeButton = document.querySelector("button.negative");
negativeButton.addEventListener("click", (e) => {
  if (DisplayDiv.textContent !== "0") {
    if (DisplayDiv.textContent.includes("-")) {
      let newstr = DisplayDiv.textContent.slice(1);
      DisplayDiv.textContent = newstr;
    } else DisplayDiv.textContent = "-" + DisplayDiv.textContent;
  }
});

const removeButton = document.querySelector("p.remove");
removeButton.addEventListener("click", (e) => {
  if (DisplayDiv.textContent.length > 1) {
    let newstr = DisplayDiv.textContent.slice(0, -1);
    DisplayDiv.textContent = newstr;
  } else DisplayDiv.textContent = "0";
});

const percentageButton = document.querySelector("button.percentage");
percentageButton.addEventListener("click", (e) => {
  let percentage = Number(DisplayDiv.textContent) / 100;
  DisplayDiv.textContent = percentage;
});
