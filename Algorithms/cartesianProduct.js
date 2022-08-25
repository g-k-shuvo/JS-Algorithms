// Problem - Given two finite not-empty sets, find their Cartesian product

// Cartesian Product Idea 
// Traverse each array and pair each element in the first array with each element in the second array

function cartesianProduct(arr1, arr2){
  const result = []

  for(let i = 0; i < arr1.length; i++){
    for (let j =0; j< arr2.length; j++){
      result.push([arr1[i], arr2[j]])
    }
  }
  
  return result
}

const arr1 = [1,2]
const arr2 = [3,4,5]
console.log(cartesianProduct(arr1, arr2))

export default cartesianProduct