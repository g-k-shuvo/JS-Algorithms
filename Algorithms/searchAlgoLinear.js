// Problem - Given an array of 'nums' elements and a target element 't', find the index of 't' in the array, Return -1 if the element is not found.

function linearSearch(nums, t) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === t) {
      return i
    }
  }
  return -1
}

// console.log(linearSearch([1,3,-5,4,6], 4)) // 3
// console.log(linearSearch([1,3,-5,4,6], 2)) // -1


export default linearSearch