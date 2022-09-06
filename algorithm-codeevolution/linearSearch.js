function linearSearch(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([-5, 10, 40, 6, 31], 10)); // 1
console.log(linearSearch([7, -54, 34, 12, 20], 34)); // 2
console.log(linearSearch([-5, 16, -11, 8, 23], 5)); // -1

// Big-O = O(n)
