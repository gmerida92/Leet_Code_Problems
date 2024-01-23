function twoSum(nums, target) {
    // Create an array of objects {value, index} to keep track of the original indices
    const numsWithIndices = nums.map((num, index) => ({ value: num, index }));
    
    // Sort the array of objects based on the values
    numsWithIndices.sort((a, b) => a.value - b.value);
    
    // Initialize two pointers
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const currentSum = numsWithIndices[left].value + numsWithIndices[right].value;
        
        if (currentSum === target) {
            // Return the original indices
            return [numsWithIndices[left].index, numsWithIndices[right].index];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    // No solution found
    return [];
}