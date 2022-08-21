// Problem - Given a sorted array of 'nums' elements and a target element 't', find the index of 't' in the array, Return -1 if the element is not found.
// Binary Search only works on sorted array.

function binarySearch(nums, target) {
  let leftIndex = 0
  let rightIndex = nums.length - 1
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === nums[middleIndex]) {
      return middleIndex;
    }
    if (target < nums[middleIndex]) {
      rightIndex = middleIndex - 1
    } else {
      leftIndex = middleIndex + 1
    }
  }
  return -1
}

// console.log(binarySearch([1, 3, 5, 6, 8], 8)) // 4
// console.log(binarySearch([1, 3, 5, 6, 8], 4)) // -1



export default binarySearch