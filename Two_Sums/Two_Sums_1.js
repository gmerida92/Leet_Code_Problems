/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */






 

/*
Given/Input:
An array of integers 'nums'
An integer 'target'


Outputs:
Return indices of the two numbers such that they add up to 'target'

Example:
Input: nums = [2,15,11,7], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Edge Case:


Approach/Psuedocode:
Need to compare 

*/
// var twoSum = function (nums, target) {
//     let startingIndex = 0;
//     let endingIndex = nums.length - 1;

//     while (startingIndex <= endingIndex) {

//         for (let nextIndex = startingIndex + 1; nextIndex <= endingIndex; nextIndex++) {
//             if (nums[startingIndex] + nums[nextIndex] === target) {
//                 return [startingIndex, nextIndex];
//             }
//         }

//         startingIndex++;
//     }

// };