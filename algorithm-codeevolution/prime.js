function primeNumber(n) {
  if (n > 1) {
    for (let i = n - 1; i > 1; i--) {
      for (let j = i; j > 1; j--) {
        if (i * j === n) {
          console.log(false);
          return false;
        }
      }
    }
  }

  console.log(true);
  return true;
}

primeNumber(11);
