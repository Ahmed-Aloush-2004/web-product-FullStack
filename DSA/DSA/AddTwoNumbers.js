function AddTwoNumbers(arr1, arr2) {
    let result = [];
    let carry = 0;
    let i = 0;
  
    // Use the longer length of arr1 or arr2 to iterate through all elements
    while (i < arr1.length || i < arr2.length || carry > 0) {
      const num1 = i < arr1.length ? arr1[i] : 0; // Get the value from arr1 or 0 if out of bounds
      const num2 = i < arr2.length ? arr2[i] : 0; // Get the value from arr2 or 0 if out of bounds
  
      const sum = num1 + num2 + carry;
      result.push(sum % 10); // Push the last digit of sum
      carry = Math.floor(sum / 10); // Update carry for the next iteration
  
      i++;
    }
  
    return result;
  }
  
  console.log(AddTwoNumbers([3, 4], [ 6])); // Output: [0, 0, 0, 1]
  