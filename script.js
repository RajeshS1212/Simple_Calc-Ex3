function calculate() {
    const inputA = parseFloat(document.getElementById('inputA').value);
    const inputB = parseFloat(document.getElementById('inputB').value);
    const operation = document.getElementById('operation').value;

    let result;
    switch (operation) {
        case 'addition':
            result = inputA + inputB;
            break;
        case 'subtraction':
            result = inputA - inputB;
            break;
        case 'multiplication':
            result = inputA * inputB;
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('resultText').innerText = `The result of ${inputA} ${getOperationSymbol(operation)} ${inputB} is ${result}`;
    document.getElementById('resultPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('resultPopup').style.display = 'none';
}

function getOperationSymbol(operation) {
    switch (operation) {
        case 'addition':
            return '+';
        case 'subtraction':
            return '-';
        case 'multiplication':
            return '*';
        default:
            return '';
    }
}