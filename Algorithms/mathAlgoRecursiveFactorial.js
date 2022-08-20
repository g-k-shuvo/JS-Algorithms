// Problem - Give an integer 'n', find the factorial of that number

function recursiveFactorial(n) {
  if (n === 0) {
    return 1
  }
  return n * recursiveFactorial(n - 1)
}

// console.log(recursiveFactorial(0)) // 1
// console.log(recursiveFactorial(1)) // 1
// console.log(recursiveFactorial(5)) // 120

export default recursiveFactorial