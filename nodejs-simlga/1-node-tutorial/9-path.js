const path = require("path");

// returns platform specific separator
console.log(path.sep);

// get file path using path.join()
const filePath = path.join(`/content`, `subfolder`, `test.txt`);
console.log(filePath);

// basename method
const base = path.basename(filePath);
console.log(base);

// get an absolute path
const absolute = path.resolve(__dirname, `content`, `subfolder`, `test.txt`);
console.log(absolute);
