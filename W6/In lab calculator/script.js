function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2
}

function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const op = prompt("Choose operation: add or multiply");
    if (op === "add") {
        alert("The answer is: " + add(num1, num2));
    } else if (op === "multiply"){
        alert("The answer is:" + multiply(num1, num2));
    } else {
        alert("Invalid operation")
    }
}
 
calculator();


