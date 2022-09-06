// function isPowerOfTwo(n) {
//   for (let i = 1; i <= n; i = i * 2) {
//     if (i === n) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5));
// console.log(isPowerOfTwo(6));
// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(12));
// console.log(isPowerOfTwo(32));

// Solution by the expert
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }

  return true;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));

// Big-O = O(logn); that is logarithmic (Input size reduces by half every iteration)

function isPowerOfTwoBitwise(n) {
  if (n < 1) {
    return false;
  }

  return n & (n - 1 === 0);
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));

// Big-O = O(1);  that is Constant (input increases but not the time to execute the operation )
