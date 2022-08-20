// Problem - Give an integer 'n', find the n'th element of the fibonacci sequence

function recursiveFibonacci(n){
  if (n < 2){
    return n
  }
  return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

// console.log(recursiveFibonacci(1)) // 1
// console.log(recursiveFibonacci(6)) // 8

export default recursiveFibonacci