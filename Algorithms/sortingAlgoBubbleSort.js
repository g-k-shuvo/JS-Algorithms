// Problem - Given an array of integers 'arr'. sort the array. 

// Bubble Sort Idea: 
// Compare adjacent elements in the arry and swap the positions if they are not in the intended order.
// Repeat the instructions as you step through each elements in the array
// Once you step through the whole array with no swaps, the array is sorted.: 

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
}

// const arr = [9, 7, 18, 25, 5, 6, 2]
// bubbleSort(arr)
// console.log(arr) // [2,  5,  6, 7, 9, 18, 25]


export default bubbleSort