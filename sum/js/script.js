let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

function getSum(num1,num2) {
    if (num1!=num2) {
        return (num1+num2);
    }
    else{
        return 3*(num1+num2);
    }
}

console.log(getSum(num1,num2))