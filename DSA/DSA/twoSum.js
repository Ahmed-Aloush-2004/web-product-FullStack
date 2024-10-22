import {} from "datastructures-js";

function twoSum(target, arr) {
  var Dictionary = new Map();
  for (let index = 0; index < arr.length; index++) {
    let complement = target - arr[index];
    if (Dictionary.has(complement)) {
      return [Dictionary.get(complement), index];
    }
    Dictionary.set(arr[index], index);
    console.log(`Dictionary ${index} `, Dictionary?.get(arr[index]));
  }
  return [];
}

console.log(twoSum(10, [1, 2, 3, 7, 2]));
