
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