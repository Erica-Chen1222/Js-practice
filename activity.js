function calculator(operator, firstNumber, secondNumber) {
    switch (operator) {
        case "add":
            return firstNumber+secondNumber;             
        case "Sub":
            return firstNumber-secondNumber;
        case "multi":
            return firstNumber*secondNumber;
        case "div":
            return firstNumber/secondNumber;
        default:
            return "please enter a right operator";
    }
}
console.log(calculator('add', 5, 2)); 
