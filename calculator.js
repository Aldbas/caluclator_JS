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
    let disabled = numBtns.forEach(button => button.disabled = false);

    let buttonClicked = e.target;
    if (display.textContent.length > 18) return;

    if (buttonClicked.value == '.' && display.textContent.includes('.')) return;

    if (buttonClicked.classList.contains('oprBtn')) {
        history.textContent = display.textContent + buttonClicked.value;
        num1 = parseInt(history.textContent.slice(0, -1));
        display.textContent = '';
        operator = buttonClicked.value;

    } else if (buttonClicked.classList.contains('equals')) {

        num2 = parseInt(display.textContent);
        results = operation(operator, num1, num2);
        if (results == 'Infinity') {
            display.textContent = 'Error :(';
        } else {
            display.textContent = results;

        }
        history.textContent = '';
        numBtns.forEach(button => button.disabled = true);
    } else {
        display.textContent += buttonClicked.value;
    }

}));

const equalBtn = document.getElementById('equals');
const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', clearInputs);
backspaceBtn.addEventListener('click', back);

function clearInputs() {
    display.textContent = '';
    history.textContent = '';
}

function back() {
    display.textContent = display.textContent.slice(0, -1);
}
//TODO: pressing down on keys
// function keyPressed(e) {
//     // const keyCodes = [8, 13, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98,
//     //  99, 100, 101, 102, 103, 104, 105, 106, 107, 109, 110, 111, 187, 190, 173];
//     const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
//     console.log(key);
//     if(!key || display.textContent.length > 18) return; // do nothing if not part of keyCodes
//     if(e.keyCode == 190 && display.textContent.includes('.')) return;
//     else if(e.keyCode == 8 ){
//    		back(); 	
//     }
//     else if (e.keyCode == 13) {

//     }
//      display.textContent += key.value; 	
     
    
// }

// window.addEventListener('keydown', keyPressed);