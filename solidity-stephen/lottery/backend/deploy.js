// deploy code will go here
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "ankle like negative snap vote already bounce piece stamp potato insect mind",
  "https://rinkeby.infura.io/v3/c86f4ecc976f4111a8c1b1e58c4591c7"
);

const web3 = new Web3(provider);

async function deploy() {
  const accounts = await web3.eth.getAccounts();

  console.log(`attempting to deploy from contract`, accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: `1000000` });

  console.log(abi);
  console.log(`contract deployed to`, result.options.address);
  provider.engine.stop(); //////// to prevent hanging deployment
}

deploy();
