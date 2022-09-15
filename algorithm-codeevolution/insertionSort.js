function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let NIT = arr[i];
    for (let j = 1; j <= i; j++) {
      let SE = arr[i - j];
      if (SE < NIT) {
        arr[i - j + 1] = NIT;
        break;
      }

      arr[i - j + 1] = SE;
    }
  }

  return arr;
}

console.log(insertionSort([-6, 20, 8, -2, 4])); // [-6, -2, 4, 8, 20];
// Big-O = O(n^2); quadratic time complexity

// solution by Codeevolution
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = numberToInsert;
  }

  return arr;
}

console.log(insertionSort([-6, 20, 8, -2, 4])); // [-6, -2, 4, 8, 20];
// Big-O = O(n^2); quadratic time complexity
