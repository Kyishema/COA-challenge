// Function to check if there is a subarray in the given array that sums up to the target value
function hasTargetSumSubarray(arr, target) {
    // Initialize the current sum to 0
    let currentSum = 0;
    
    // Initialize the left pointer to 0
    let left = 0;
    
    // Iterate through the array using the right pointer
    for (let right = 0; right < arr.length; right++) {
      // Add the current element to the current sum
      currentSum += arr[right];
      
      // While the current sum is greater than the target and the left pointer is less than or equal to the right pointer
      while (currentSum > target && left <= right) {
        // Subtract the element at the left pointer from the current sum
        currentSum -= arr[left];
        
        // Move the left pointer to the right
        left++;
      }
      
      // If the current sum is equal to the target, return true
      if (currentSum === target) {
        return true;
      }
    }
    
    // If no subarray is found that sums up to the target, return false
    return false;
  }
  
