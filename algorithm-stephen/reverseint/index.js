// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/////////////////////// My Solution //////////////////////////
// function reverseInt(n) {
//// 1st solution
// n = `` + n;
// let index = 0;
// if (n[0] === `-`) index = 1;

// let reversed = ``;
// for (let i = index; i < n.length; i++) {
//   reversed = n[i] + reversed;
// }

// if (index === 1) return -reversed;
// return +reversed;

//// 2nd solution
// const signValue = Math.sign(n);
// let reversed = n.toString().split(``).reverse();

// if (signValue === -1) {
//   reversed.pop();
//   reversed = reversed.join(``);
//   return -reversed;
// } else {
//   reversed = reversed.join(``);
//   return +reversed;
// }
// }

//////////// Solution by Stephen /////////////////
function reverseInt(n) {
  const reversed = n.toString().split(``).reverse().join(``);
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
