function add(first, second) {
    return Number(first) + Number(second);
}

function subtract(first, second) {
    return Number(first) - Number(second);
}

function multiply(first, second) {
    return Number(first) * Number(second);
}

function divide(first, second) {
    return Number(first) / Number(second);
}

function operate(operator, first, second){
    switch (operator) {
        case '+':
            result = add(first, second);
            break;
        case '-':
            result = subtract(first, second);
            break;
        case '*':
            result = multiply(first, second);
            break;
        case '/':
            result = divide(first, second);
            break;           
    }
    return result;
}

let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

let displayedNumber = '';
let storedNumber = '';
let operator = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        idName = button.id;
        
        if (idName.substring(0, 6) === 'number') {
            number = button.id.charAt(6);
            displayedNumber += number;
            display.textContent = displayedNumber;
        } else if (idName === 'clear') {
            displayedNumber = displayedNumber.slice(0, -1);
            display.textContent = displayedNumber;
        } else if (idName === 'decimal' && displayedNumber.includes('.') === false) {
            displayedNumber += '.';
            display.textContent = displayedNumber;
        } else if (idName === 'equals') {
            result = operate(operator, storedNumber, displayedNumber);
            displayedNumber = result;
            display.textContent = displayedNumber;
        } else {
            if (storedNumber === '') {
                storedNumber = displayedNumber;
                displayedNumber = '';
            } else if (storedNumber != '') {
                result = operate(operator, storedNumber, displayedNumber);
                storedNumber = result;
                display.textContent = storedNumber;
                displayedNumber = '';
            }
            switch (idName) {
                case 'add' :
                    operator = '+';
                    break;
                case 'subtract' :
                    operator = '-';
                    break;
                case 'multiply' :
                    operator = '*';
                    break;
                case 'divide' :
                    operator = '/';
                    break;
            }
        }
    });
});