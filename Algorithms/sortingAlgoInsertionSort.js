// Problem - Given an array of integers 'arr'. sort the array. 

// Insertion Sort Idea 
// Virtually split the array into a sorted and unsorted part
// Assume that the first element is already sorted and remaining elements are unsorted
// Select an unsorted element and compare with all the elements in the sorted part
// If the elements in the sorted part is smaller that the selected element, proceed to the next element in the unsorted part. else shift larger elements in the sorted part towards the right
// Insert the selected element at the right index
// Repeat till all the unsorted elements are placed in the right order

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++){
    let numberToInsert = arr[i]
    let j = i-1
    while(j >= 0 && arr[j] > numberToInsert){
      arr[j+1] = arr[j]
      j = j-1
    }
    arr[j+1] = numberToInsert
  }
}
const arr = [9, 7, 18, 25, 5, 6, 2]
insertionSort(arr)
// console.log(arr) // [2,  5,  6, 7, 9, 18, 25]

export default insertionSort