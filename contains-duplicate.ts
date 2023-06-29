/*Given an integer array nums, return true if any value appears at least
 twice in the array, and return false if every element is distinct.
*/

// solving using a set
function containsDuplicate(nums: number[]): boolean {
  const set = new Set(nums);
  return set.size !== nums.length;
}

// solved using a hash table
// function containsDuplicate(nums: number[]): boolean {
//   const hashTable: { [key: string]: number } = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (hashTable[nums[i]]) {
//       return true;
//     } else {
//       hashTable[nums[i]] = 1;
//     }
//   }
//   return false;
// }

// solved using sort method
// function containsDuplicate(nums: number[]): boolean {
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// }

// solved using a map
// function containsDuplicate(nums: number[]): boolean {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       return true;
//     } else {
//       map.set(nums[i], 1);
//     }
//   }
//   return false;
// }

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
