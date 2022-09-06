//////// My Solution
function primeNumber(n) {
  if (n < 2) {
    console.log(false);
    return false;
  }

  for (let i = n - 1; i > 1; i--) {
    for (let j = i; j > 1; j--) {
      if (i * j === n) {
        console.log(false);
        return false;
      }
    }
  }

  console.log(true);
  return true;
}

primeNumber(1);
primeNumber(5);
primeNumber(4);

// Big-O = O(n^2)

/////// Solution by an Expert
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));

// Big-O = O(sqrt(n))

///// Optimized primality test
// Integers larger than the square root do not need to be checked because, whenever `n = a * b`, one of the two factors `a` and `b` is less than or equal to the square root of `n`

// n = 24, a = 4 and b = 6;
// the square root of 24 is 4.89
// 4 is less than 4.89
// a is less than the square root of n

// n = 35, a = 5 and b = 7;
// the square root of 35 is 5.91
// 4 is less than 5.91
// a is less than the square root of n
