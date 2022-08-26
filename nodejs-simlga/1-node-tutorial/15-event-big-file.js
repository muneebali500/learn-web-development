const { writeFileSync } = require(`fs`);

for (let i = 0; i < 10000; i++) {
  writeFileSync(`./content/big-file.txt`, `this is big file ${i}\n`, {
    flag: `a`,
  });
}
