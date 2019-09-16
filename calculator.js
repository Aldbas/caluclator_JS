
const backspaceBtn = document.querySelector('.back');


// const add =  function addition(num1, num2) {
// 	return num1 + num2;
// }

// const subtract = function subtraction(num1, num2) {
// 	return num1 - num2;
// }

// const multiply = function multiplication(num1 ,num2 ){
// 	return num1 * num2;
// }

// const divide = function division(num1,num2{

// 	return num1 / num2;
// }


const displayInput = document.querySelector('.display .currentExp');
const history = document.querySelector('.display .historyExp');
// let dick = display.textContent = 'GEL240';

const buttons = document.querySelectorAll('button');
let operator = 'subtract';
buttons.forEach(button => button.addEventListener('click', function(e){
	let clickedBtn = e.target.value;
	console.log(clickedBtn);
	if(displayInput.textContent.length > 18) return;

	if(e.target.classList.contains('decimal')) {
		inputDecimal(e.target.value);
	}if(e.target.classList.contains('equals')){
		console.log(history.textContent);
		console.log(displayInput.textContent);
		console.log(1);

		let final = operation(math[1], history.textContent, displayInput.textContent);
		displayInput.textContent = final;
		console.log(final);
	}
	else {
	displayInput.textContent += clickedBtn; 	
	} 
	
}));

const clearBtn = document.querySelector('.clear');
const equalBtn = document.getElementById('equals');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');

minusBtn.addEventListener('click', minus);
// plusBtn.addEventListener('click', plus);
// multiplyBtn.addEventListener('click', multiply);
// divideBtn.addEventListener('click', divide);
clearBtn.addEventListener('click', clear); 
backspaceBtn.addEventListener('click', back);

let math = [ //fix probably use case
	function add (num1, num2){
		return num1 + num2;
	},
	function subtract(num1, num2) {
		return num1 - num2;
	},
	function multiply(num1, num2) {
		return num1 * num2;
	},
	function divide(num1, num2) {
		return num1 / num2;
	}
];

function operation(math, num1, num2 ) {
	return math(num1,num2);
}
console.log(operation(math[0],4,5));

function minus() {
	 history.textContent = displayInput.textContent;
	 displayInput.textContent = '';
	 operator = 'subtract';
	console.log(history.textContent);
}



function clear() {
	displayInput.textContent = '';
	history.textContent = '';
}

function inputDecimal(dot) {
  // If the `displayInputValue` does not contain a decimal point
  if (!displayInput.textContent.includes(dot)) {
    // Append the decimal point
    displayInput.textContent += dot;
  }
}

function back() {
	displayInput.textContent = displayInput.textContent.slice(0,-1);
}