// solution by me
// function bubbleSort(arr) {
//   let swap = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       let temp = arr[i + 1];
//       arr[i + 1] = arr[i];
//       arr[i] = temp;

//       swap++;
//     }
//   }

//   if (swap > 0) {
//     return bubbleSort(arr);
//   } else {
//     return arr;
//   }
// }

// console.log(bubbleSort([-6, 8, 20, -2, 4]));

// solution by a codeevolution
function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(bubbleSort([-6, 8, 20, -2, 4]));

// Big-O = O(n^2); => quadratic

// solution by stephen grider
const arr = [-6, 8, 20, -2, 4];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);
