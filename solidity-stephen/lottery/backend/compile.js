const path = require("path"); //cross platform compatibility
const fs = require("fs");
const solc = require("solc");

const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol"); //current working directory
const source = fs.readFileSync(lotteryPath, "utf8"); //read raw source file

// The last line of codes need to be changed like below.
const input = {
  language: "Solidity",
  sources: {
    "Lottery.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};
const output = JSON.parse(solc.compile(JSON.stringify(input)));

module.exports = {
  abi: output.contracts["Lottery.sol"].Lottery.abi,
  bytecode: output.contracts["Lottery.sol"].Lottery.evm.bytecode.object,
};
