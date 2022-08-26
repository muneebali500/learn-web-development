const { readFileSync, writeFileSync } = require("fs");

const firstFile = readFileSync(`./content/first.txt`, `utf8`);
const secondFile = readFileSync(`./content/second.txt`, `utf8`);

console.log(firstFile, secondFile);

writeFileSync(
  `./content/result-sync.txt`,
  ` yeh raat bheegi bheegi, yeh mast fizaaein`,
  { flag: `a` }
);
