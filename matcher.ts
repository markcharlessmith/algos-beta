// write a function that accepts two arrays of strings as arguments
// if the same string is present in both arrays, return an array of the indexes of the matching strings

const arr1 = ["crossword", "puzzle", "dancing", "hamster"];
const arr2 = ["octopus", "dance", "crossword", "sunshine"];
const arr3 = ["crossword", "dance", "boulevard", "foxtrot"];

function matcher(array1: string[], array2: string[]) {
  // assign result
  const result = []
  // iterate through the first array
  for (let i = 0; i < array1.length; i++) {
    // iterate through the second array
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) result.push(`first array` i, `second array` j)
    }
  }
  return result;
}

console.log(matcher(arr1, arr2))
console.log(matcher(arr1, arr3))
console.log(matcher(arr2, arr3))