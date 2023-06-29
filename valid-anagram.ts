// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
//
// Example 2:
// Input: s = "rat", t = "car"
// Output: false
//
// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
//
// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?


// function isAnagram(s: string, t: string): boolean {
//   // if the strings are the same, they are anagrams
//   if (s === t) return true
//   // if the strings are not the same length, they cannot be anagrams
//   if (s.length !== t.length) return false
//   // create a hash table to store the characters and their counts
//   const hash = {}
//   // iterate through the first string
//   for (let i = 0; i < s.length; i++) {
//     // if the character is not in the hash, add it with a count of 1
//     if (!hash[s[i]]) hash[s[i]] = 1
//     // if the character is in the hash, increment the count
//     else hash[s[i]]++
//   }
//   // iterate through the second string
//   for (let i = 0; i < t.length; i++) {
//     // if the character is not in the hash, return false
//     if (!hash[t[i]]) return false
//     // if the character is in the hash, decrement the count
//     else hash[t[i]]--
//   }
//   // iterate through the hash
//   for (let key in hash) {
//     // if any of the counts are not 0, return false
//     if (hash[key] !== 0) return false
//   }
//   // if all the counts are 0, return true
//   return true
// }

// solution using sorting
function isAnagram(s: string, t: string): boolean {
  // if the strings are the same, they are anagrams
  if (s === t) return true
  // if the strings are not the same length, they cannot be anagrams
  if (s.length !== t.length) return false
  // sort the strings
  const sortedS = s.split('').sort().join('')
  const sortedT = t.split('').sort().join('')
  // if the sorted strings are the same, they are anagrams
  if (sortedS === sortedT) return true
  // otherwise, they are not anagrams
  return false
}

// tests
console.log(isAnagram('anagram', 'nagaram')) // true
console.log(isAnagram('rat', 'car')) // false
console.log(isAnagram('a', 'ab')) // false
console.log(isAnagram('123', '321')) // true
console.log(isAnagram('aacc', 'ccac')) // false
console.log(isAnagram('delirium', 'ridiculum')) // false
console.log(isAnagram('meat', 'team')) // true
console.log(isAnagram('meat', 'meat')) // true

// tests including combinations of some unicode chars
console.log(isAnagram('🍎🍊🍋🍌🍉', '🍉🍌🍋🍊🍎')) // true
console.log(isAnagram('🍊1abfQ', '🍊Q1abf')) // true






