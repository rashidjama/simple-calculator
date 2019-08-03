// CACHE THE DOM
const calBtnNum = document.querySelectorAll('.cal__btn-num');
const calDisplay = document.querySelector(".btn__display");
const backSpace = document.getElementById("back__space");
const acBtn = document.getElementById("ac");
const decimalEl = document.getElementById('decimal');
const calBtnOp = document.querySelectorAll('.cal__btn-operator');


// Global variables
let display = 0;
let pendingDisplay;
let evalStringArray = [];

// Updating display
let updateDisplay = event => {
  let btnVal = event.target.innerText;
  if (display === 0) {
    display = "";
  }
  display += btnVal;
  calDisplay.innerHTML = display;
  acBtn.innerHTML = "C";
}

// Displaying numbers
for (let i = 0; i < calBtnNum.length; i++) {
  calBtnNum[i].addEventListener("click", updateDisplay);
}

// OPERATIONS MAIN LOGIC
let operations = event => {
  let operator = event.target.innerText;
  if (operator === "+") {
    pendingDisplay = display;
    display = 0;
    calDisplay.innerHTML = display;
    evalStringArray.push(pendingDisplay);
    evalStringArray.push("+")
  } else if (operator === "−") {
    pendingDisplay = display;
    display = 0;
    calDisplay.innerHTML = display;
    evalStringArray.push(pendingDisplay);
    evalStringArray.push("-")
  } else if (operator === "×") {
    pendingDisplay = display;
    display = 0;
    calDisplay.innerHTML = display;
    evalStringArray.push(pendingDisplay);
    evalStringArray.push("*")
  } else if (operator === "÷") {
    pendingDisplay = display;
    display = 0;
    calDisplay.innerHTML = display;
    evalStringArray.push(pendingDisplay);
    evalStringArray.push("/")
  } else if (operator === "=") {
    evalStringArray.push(display);
    let evaluation = eval(evalStringArray.join(" "));
    display = evaluation + '';
    calDisplay.innerHTML = display;
    evalStringArray = [];
  }
}

//OPERATIONS
for (let i = 0; i < calBtnOp.length; i++) {
  calBtnOp[i].addEventListener("click", operations);
}

// CLEAR BUTTON
acBtn.onclick = _ => {
  display = 0;
  pendingDisplay = undefined;
  evalStringArray = [];
  calDisplay.innerHTML = display;
  acBtn.innerHTML = "AC";
}

// BACKSPACE
backSpace.onclick = _ => {
  display = display.slice(0, display.length - 1);
  if (display === '') {
    display = 0;
  }
  calDisplay.innerHTML = display;
  acBtn.innerHTML = "AC";
}

//DECIMAL
decimalEl.onclick = _ => {
  if (!display.includes("."))
    display += ".";
  calDisplay.innerHTML = display;
}


// Cache the DOM
// const calBtnNum = $('.cal__btn-num');
// const calDisplay = $('.btn__display');
// const acBtn = $('#ac');
// const decimal = $('#decimal');
// const backSpace = $('#back__space');
// const calBtnOp = $('.cal__btn-operator');

// // Global variables
// let display = 0;
// let pendingDisplay;
// let evalStringArray = [];

// // updating display

// let updateDisplay = event => {
//   let btnVal = event.target.innerText;
//   if (display === 0) {
//     display = '';
//   }
//   display += btnVal;
//   calDisplay.text(display);
// }

// calBtnNum.on('click', updateDisplay);

// //operations
// let operations = event => {
//   let operator = event.target.innerText;

//   switch (operator) {
//     case '+':
//       pendingDisplay = display;
//       display = 0;
//       calDisplay.text(display);
//       evalStringArray.push(pendingDisplay);
//       evalStringArray.push('+')
//       break;
//     case '−':
//       pendingDisplay = display;
//       display = 0;
//       calDisplay.text(display);
//       evalStringArray.push(pendingDisplay);
//       evalStringArray.push('-')
//       break;
//     case '×':
//       pendingDisplay = display;
//       display = 0;
//       calDisplay.text(display);
//       evalStringArray.push(pendingDisplay);
//       evalStringArray.push('*')
//       break;
//     case '÷':
//       pendingDisplay = display;
//       display = 0;
//       calDisplay.text(display);
//       evalStringArray.push(pendingDisplay);
//       evalStringArray.push('/')
//       break;
//     case '=':
//       evalStringArray.push(display);
//       let evaluation = eval(evalStringArray.join(" "));
//       display = evaluation + '';
//       calDisplay.text(display);
//       evalStringArray = [];
//     default:
//       break;
//   }
// }
// calBtnOp.on('click', operations)

// // Clear button
// acBtn.on('click', _ => {
//   display = 0;
//   calDisplay.text(display);
// })

// // backspace
// backSpace.on('click', _ => {
//   display = display.slice(0, display.length - 1);
//   if (display === '') {
//     display = 0;
//   }
//   calDisplay.text(display);
// })

// //Decimal
// decimal.on('click', _ => {
//   if (!display.includes(".")) {
//     display += ".";
//     calDisplay.text(display);
//   }
// })