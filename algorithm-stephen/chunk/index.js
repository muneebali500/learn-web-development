// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//////////////////// My Solution //////////////////////
// function chunk(array, size) {
//   let arrayOfArrays = [];
//   let subArray = [];

//   for (let value of array) {
//     subArray[subArray.length] = value;

//     if (subArray.length === size) {
//       arrayOfArrays[arrayOfArrays.length] = subArray;
//       subArray = [];
//     }
//   }

//   if (arrayOfArrays.length && subArray.length)
//     return [...arrayOfArrays, subArray];

//   if (!subArray.length) return [...arrayOfArrays];

//   return subArray;
// }

////////////////// Solution by Stephen //////////////////
// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// }

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;
