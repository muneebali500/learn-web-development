function recursiveFactorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(6));

// Big-O = O(n)