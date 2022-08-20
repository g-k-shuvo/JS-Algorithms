//Problem - Give a number 'n', find the first 'n' elements of the Fibonacci Sequence

function fibonacci(n) {
  // The first two number of the fibonacci sequence are 0 and 1
 let fib = [0, 1]
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib;
}

// console.log(fibonacci(5)) // [ 0, 1, 1, 2, 3 ]

export default fibonacci

