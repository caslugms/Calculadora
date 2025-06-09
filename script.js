let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('screen').value = currentInput;
}

function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    document.getElementById('screen').value = currentInput;
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
        currentInput = '';
    }
}
