function operate(operator, first, second){
    switch (operator) {
        case '+':
            result = Number(first) + Number(second);
            break;
        case '-':
            result = Number(first) - Number(second);
            break;
        case '*':
            result = Number(first) * Number(second);
            break;
        case '/':
            result = Number(first) / Number(second);;
            break;           
    }
    return result;
}

function checkDecimal(number) {
    return number != parseInt(number);
}

function limitDecimal(number, maxDecimal) {
    const roundedNumber = parseFloat(number.toFixed(maxDecimal));
    return roundedNumber;
}

let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let displayedNumber = '';
let storedNumber = '';
let operator = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let idName = button.id;
        
        if (idName.substring(0, 6) === 'number') { // Add number to the calc display
            number = button.id.charAt(6);
            displayedNumber += number;
            display.textContent = displayedNumber;
        } else if (idName === 'clear') { // Clear all values
            displayedNumber = '';
            storedNumber = '';
            operator = '';
            display.textContent = displayedNumber;
        } else if (idName === 'decimal' && displayedNumber != '' && displayedNumber.includes('.') === false) { // Add decimal
            displayedNumber += '.';
            display.textContent = displayedNumber;
        } else if (idName === 'equals') {
            if (storedNumber != '' && displayedNumber != '') {
                result = operate(operator, storedNumber, displayedNumber);
                if (checkDecimal(result) === true) {
                    result = limitDecimal(result, 3)
                }
                storedNumber = result;
                display.textContent = storedNumber;
                displayedNumber = '';
            }
        } else if (idName === 'add' || idName === 'subtract' || idName === 'multiply' || idName === 'divide'){
            if (storedNumber === '') {
                storedNumber = displayedNumber;
                displayedNumber = '';
            } else if (storedNumber != '' && displayedNumber != '') {
                result = operate(operator, storedNumber, displayedNumber);
                if (checkDecimal(result) === true) {
                    result = limitDecimal(result, 3)
                }
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