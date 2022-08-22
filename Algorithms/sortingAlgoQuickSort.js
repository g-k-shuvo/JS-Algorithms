// Problem - Given an array of integers 'arr'. sort the array. 

// Quick Sort Idea 
// Identify the pivot element in the array
// -- Pick the first element as pivot
// -- Pick last element as pivot
// -- Pick a random element as pivot
// -- Pick median as pivot
// Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into the 'right' array
// Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by defination
// Repeatedly concatanate the left array, pivot and right array till one sorted array remains.


function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let pivot = arr[arr.length - 1]
  let left = []
  let right = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}
const arr = [9, 7, 18, 25, 5, 6, 2]

// console.log(quickSort(arr)) // [2,  5,  6, 7, 9, 18, 25]

export default quickSort