function recursiveBinarySearch(arr, t) {
  return search(arr, t, 0, arr.length - 1);
}

function search(arr, t, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (arr[middleIndex] === t) {
    return middleIndex;
  }

  if (t > arr[middleIndex]) {
    return search(arr, t, middleIndex + 1, rightIndex);
  } else {
    return search(arr, t, leftIndex, middleIndex - 1);
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1

// Big-O = O(logn)
