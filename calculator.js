
const backspaceBtn = document.querySelector('.back');


const add =  function addition(num1, num2) {
	return (num1 + num2);
}

const subtract = function subtraction(num1, num2) {
	return (num1 - num2);
}

const multiply = function multiplication(num1 ,num2 ){
	return (num1 * num2);
}

const divide = function division(num1,num2){

	return (num1 / num2);
}

function operation(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }
}

const display = document.querySelector('.display .currentExp');
const history = document.querySelector('.display .historyExp');
// let dick = display.textContent = 'GEL240';

const buttons = document.querySelectorAll('button');
let operator = '';
let num1 = '';
let num2 = '';

buttons.forEach(button => button.addEventListener('click', function(e){
	let button = e.target;
	if(display.textContent.length > 18)return; 

	if(e.target.classList.contains('decimal')) {
		inputDecimal(e.target.value);
	}
	else if (button.classList.contains('oprBtn')) {
		history.textContent = display.textContent + button.value;
		num1 = history.textContent.slice(0, -1);
		display.textContent = '';
		operator = button.value;
	}
	else if(e.target.classList.contains('equals')){
		results = operation(operator, num1, display.textContent);
		display.textContent = results;
		history.textContent = '';
	}	
	
	else {
	num2 = display.textContent += button.value; 

	} 
	
	
}));



const equalBtn = document.getElementById('equals');
const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', clear); 

backspaceBtn.addEventListener('click',back);

function clear() {
	display.textContent = '';
	history.textContent = '';
}

function inputDecimal(dot) {
  // If the `displayValue` does not contain a decimal point
  if (!display.textContent.includes(dot)) {
    // Append the decimal point
    display.textContent += dot;
  }
}

function back() {
	display.textContent = display.textContent.slice(0,-1);
}