const history = document.querySelector('.display .historyExp');
const display = document.querySelector('.display .currentExp');
const backspaceBtn = document.querySelector('.back');

const buttons = document.querySelectorAll('button');
const numBtns = document.querySelectorAll('.numBtn');
let operator = '';
let num1 = '';
let num2 = '';

const add = function addition(num1, num2) {
    return (num1) + (num2);
}

const subtract = function subtraction(num1, num2) {
    return (num1 - num2);
}

const multiply = function multiplication(num1, num2) {
    return (num1 * num2);
}

const divide = function division(num1, num2) {

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



buttons.forEach(button => button.addEventListener('click', function(e) {
    let buttonClicked = e.target;
    if (display.textContent.length > 18) return;

    if (buttonClicked.value == '.' && display.textContent.includes('.')) return;

    else if (buttonClicked.classList.contains('oprBtn')) {
        history.textContent = display.textContent + buttonClicked.value;
        num1 = parseInt(history.textContent.slice(0, -1));
        display.textContent = '';
        operator = buttonClicked.value;


    } else if (buttonClicked.classList.contains('equals')) {

        num2 = parseInt(display.textContent);
        results = operation(operator, num1, num2);
        if (results == 'Infinity') {
            display.textContent = 'Error';
            alert('who you fooling huh??');
        } else {
            display.textContent = results;

        }
        history.textContent = '';
        numBtns.forEach(button => button.disabled = true);
    } else {
        display.textContent += buttonClicked.value;
        numBtns.forEach(button => button.disabled = false);

    }
console.log(e.keyCode);

}));



const equalBtn = document.getElementById('equals');
const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', clearInputs);
backspaceBtn.addEventListener('click', back);

function clearInputs() {
    display.textContent = '';
    history.textContent = '';
}

function updateDisplay() {
    display.textContent = '0';
    history.textContent = '';

}

function back() {
    display.textContent = display.textContent.slice(0, -1);
}