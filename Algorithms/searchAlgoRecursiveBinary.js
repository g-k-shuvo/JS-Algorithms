// Problem - Given a sorted array of 'nums' elements and a target element 't', find the index of 't' in the array, Return -1 if the element is not found.
// Binary Search only works on sorted array.

function recursiveBinarySearch(nums, target) {
  return search(nums, target, 0, nums.length - 1)
}

function search(nums, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  if (target === nums[middleIndex]) {
    return middleIndex;
  }
  if (target < nums[middleIndex]) {
    return search(nums, target, leftIndex, middleIndex - 1)
  } else {
    return search(nums, target, middleIndex + 1, rightIndex)
  }

}

// console.log(recursiveBinarySearch([-5, -2, 1, 3, 5, 6, 8], 8)) // 6
// console.log(recursiveBinarySearch([1, 3, 5, 6, 8,10, 14], 20)) // -1

export default recursiveBinarySearch