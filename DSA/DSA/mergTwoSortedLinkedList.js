

console.log(mergTwoSortedLinkedList([1,3,7],[3,5,8]));
console.log(mergTwoSortedLinkedList([5],[3]));



function mergTwoSortedLinkedList(arr1, arr2) {
  
  let i = 0;
  let j = 0;
  let c = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      c.push(arr1[i]);
      i++;
      
    } else {
      c.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    c.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    c.push(arr2[j]);
    j++;
  }

  return c;
}
