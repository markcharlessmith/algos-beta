/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity? */

// naive solution (O(n^2))
// function twoSum(nums: number[], target: number): number[] {

//   const result: number[] = [];
//   // iterate through the input array
//   for (let i = 0; i < nums.length; i++) {
//     // iterate through the other indices
//     for (let j = i + 1; j < nums.length; j++) {
//       //compare, and push to result
//       if (nums[i] + nums[j] === target) result.push(i, j);
//       break;
//     }
//   }
//   return result;
// };

// sorting solution with two pointers (O(n log n))
function twoSum(nums: number[], target: number): number[] {
  const result: number[] = [];
  const sortedNums = [...nums].sort((a, b) => a - b);

  let leftPointer = 0;
  let rightPointer = sortedNums.length - 1;

  for (let i = 0; i < sortedNums.length; i++) {
    let sum = sortedNums[leftPointer] + sortedNums[rightPointer];

    if (sum === target) {
      result.push(nums.indexOf(sortedNums[leftPointer]));
      result.push(nums.lastIndexOf(sortedNums[rightPointer]));
      return result;
    } else if (sum < target) {
      leftPointer++;
    } else {
      rightPointer--;
    }

    if (leftPointer >= rightPointer) {
      break;
    }
  }

  return result;
}

console.log(twoSum([2, 7, 11, 15], 9)); // expect [0, 1]
console.log(twoSum([3, 2, 4], 6)); // expect [1, 2]
console.log(twoSum([3, 3], 6)); // expect [0, 1]
console.log(twoSum([1, 2], 5)); // expect []
console.log(twoSum([1, 2], 4)); // expect []