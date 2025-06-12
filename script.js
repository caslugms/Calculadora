let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('screen').value = currentInput;
}

function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    document.getElementById('screen').value = currentInput;
}

function appendParenthesis(parenthesis) {
    currentInput += parenthesis;
    document.getElementById('screen').value = currentInput;
}

function appendDecimal() {
    const parts = currentInput.split(' ');
    const lastPart = parts[parts.length - 1];
    
    if (!lastPart.includes('.')) {
        currentInput += '.';
        document.getElementById('screen').value = currentInput;
    }
}

function clearScreen() {
    currentInput = '';
    document.getElementById('screen').value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('screen').value = currentInput;
    } catch (e) {
        document.getElementById('screen').value = 'Erro';
        setTimeout(() => {
            currentInput = '';
            document.getElementById('screen').value = '';
        }, 1500);
    }
}