const path = require("path"); //cross platform compatibility
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol"); //current working directory
const source = fs.readFileSync(inboxPath, "utf8"); //read raw source file

// module.exports = solc.compile(source, 1).contracts[':Inbox'];

// The last line of codes need to be changed like below.
const input = {
  language: "Solidity",
  sources: {
    "Inbox.sol": {
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
  abi: output.contracts["Inbox.sol"].Inbox.abi,
  bytecode: output.contracts["Inbox.sol"].Inbox.evm.bytecode.object,
};
