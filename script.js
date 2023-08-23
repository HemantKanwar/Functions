let number = 5;
let result = factorial(number);

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

console.log(`Factorial of ${number} is ${result}`);