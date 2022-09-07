function linearSearch(arr, t) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === t) {
      return middleIndex;
    }

    if (arr[middleIndex] > t) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

console.log(linearSearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(linearSearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(linearSearch([-5, 2, 4, 6, 10], 20)); // -1

// Big-O = O(logn)
