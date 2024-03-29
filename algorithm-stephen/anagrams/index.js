// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/////////////////////// My Solution /////////////////////////////////
// function anagrams(stringA, stringB) {
//   let stringAMap = buildStringMap(stringA);
//   let stringBMap = buildStringMap(stringB);

//   if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length)
//     return false;

//   for (let char in stringAMap) {
//     if (stringAMap[char] !== stringBMap[char]) return false;
//   }

//   return true;
// }

// function buildStringMap(str) {
//   let stringMap = {};

//   for (let char of str) {
//     if (char >= `A` && char <= `z`) {
//       stringMap[char] = stringMap[char]++ || 1;
//     }
//   }

//   return stringMap;
// }

//////////////////////////// Solution by Stephen //////////////////////////
//// 1st solution
// function anagrams(stringA, stringB) {
//   let aCharMap = buildCharMap(stringA);
//   let bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
//     return false;

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) return false;
//   }

//   return true;
// }

// function buildCharMap(str) {
//   let charMap = {};

//   for (let char of str.replace(/[^\w]/g, ``).toLowerCase()) {
//     charMap[char] = charMap[char]++ || 1;
//   }

//   return charMap;
// }

//// 2nd solution
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, ``).toLowerCase().split(``).sort().join(``);
}

module.exports = anagrams;
