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
  } else return "cant divide by 0";
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
    return divide(a / b);
  }
}

const NumberButtons = document.querySelectorAll("button.number");
const DisplayDiv = document.querySelector("div.display");
// THESE ARE THE VARIABLES NEEDED AS OF NOW
let operator = "";
let total = 0;
let value1 = 0;
let value2 = 0;
let x = 0; // THIS VARIABLE IS MADE TO ALLOW AN TO OVERRIDE AN IF STATEMENT
NumberButtons.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (DisplayDiv.textContent.length < 10) {
      if (DisplayDiv.textContent === "0" || x !== 0) {
        // THE X IS MADE IN CASE VALUE1 ONE IS INSERTED , X HELPS TO NOT CONTINUE WRITING ON THE FIRST VALUE1 WHILE INSERTING VALUE 2
        x = 0;
        DisplayDiv.textContent = number.textContent;
      } else DisplayDiv.textContent += number.textContent; // WHEN X BECOMES 0, THE IF STATEMENT IS IGNORED AND IT COMES HERE,
      //  THIS IS NEEDED TO TYPE NUMBERS AND NOT JUST ONE DIGIT
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
    const operator = operation.textContent;
    if (value1 === 0) {
      // THIS IS MADE IN CASE WE JUST STARTED, FIRST INPUT
      value1 = parseInt(DisplayDiv.textContent);
      x = 1;
    } else {
      // THIS IS WHEN OPERATIONS START,
      value2 = parseInt(DisplayDiv.textContent);
      total = operate(value1, value2, operator);
      // I TAKE VALUE2 AND MAKE AN OPERATION
      value1 = total; // THIS IS MADE BECAUSE THE FIRST IF STATEMENT WILL NOT BE
      //TRIGERRED AGAIN AND TO SAVE THE total obv
    }
    if (operator === "/" || "*") {
      // I THOUGHT OF THIS IN CASE I CLICKED ON AN OPERATION FIRST , ITS BLURRY FOR ME TOO ,MAZAL MAFRITHASH HNA
      value2 = 1;
    } else value2 = 0;

    x = 1;
    DisplayDiv.textContent = total;

    console.log(value1);
  });
});

const Result = document.querySelector("button.equals"); //IGNORE THIS FOR NOW
Result.addEventListener("click", (e) => {
  AddupValue = parseInt(DisplayDiv.textContent);
  DisplayDiv.textContent = operate(total, AddupValue, operator);
});
