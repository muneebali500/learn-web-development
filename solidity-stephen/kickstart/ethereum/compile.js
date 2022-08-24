const path = require("path"); //cross platform compatibility
const fs = require("fs-extra");
const solc = require("solc");

const buildPath = path.resolve(__dirname, "build"); // getting path for build folder
fs.removeSync(buildPath); // removing everything in build folder

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol"); //current working directory
const source = fs.readFileSync(campaignPath, "utf8"); //read raw source file

// The last line of codes need to be changed like below.
const input = {
  language: "Solidity",
  sources: {
    "Campaign.sol": {
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

const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "Campaign.sol"
];

// console.log(output.contracts["Campaign.sol"]);

fs.ensureDirSync(buildPath); // creating the build folder

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, `${contract}.json`),
    output[contract]
  );
}

// module.exports = {
//   abi: output.contracts["Campaign.sol"].Campaign.abi,
//   bytecode: output.contracts["Campaign.sol"].Campaign.evm.bytecode.object,
// };
