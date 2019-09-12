
let math = {
	add: function(num1, num2){
		return num1 + num2;
	},
	subtract: function(num1, num2) {
		return num1 - num2;
	},
	multiply: function(num1, num2) {
		return num1 * num2;
	},
	divide: function(num1, num2) {
		return num1 / num2;
	}
}

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

const operate = function operation(math, num1, num2 ) {
	return math(num1,num2);
}

const display = document.querySelector('.display p');
display.textContent = '1,23,4,45 +5';

const digitBtn = [0,1,2,3,4,5,6,7,8,9];

const buttons = document.querySelectorAll('.digitBtn');
buttons.forEach(button => button.addEventListener('click', function(index){
	console.log(`digitBtn${index}`);
}));
console.log(buttons);

const equalBtn = document.getElementById('equalsBtn');
console.log(equalBtn);