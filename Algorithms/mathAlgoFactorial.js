//Problem - Give a integer 'n', find the factorial of that integer.

function factorial(n) {
  // Factorial of 0 and 1 = 1
 let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result;
}

// console.log(factorial(5)) // 120

export default factorial

