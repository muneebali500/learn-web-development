// Tower of Hanoi - Mathematical Puzzle
// The objective of the puzzle is to move the entire stack to the last rod, obeying the following rules:
// 1) Only one disk may be moved at a time
// 2) Each move consisting of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod. And lastly,
// 3) No disck may be placed on top of a disk that is smaller

// solution
// 1) Shift `n-1` disks from `A` to `B`, using `C` (when required)
// 2) Shift last disk from `A` to `C`
// 3) Shift `n-1` disks from `B` to `C`, using `A` (when required)

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, `A`, `C`, `B`);

// Big-O = O(2^n);
