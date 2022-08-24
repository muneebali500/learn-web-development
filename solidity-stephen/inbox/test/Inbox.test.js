// contract test code will go here
const assert = require(`assert`); //// this is a built-in nodejs library
const ganache = require(`ganache-cli`); /////// local ethereum network
const Web3 = require(`web3`);
const web3 = new Web3(ganache.provider());
const { abi, bytecode } = require("../compile");

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of accounts
  accounts = await web3.eth.getAccounts();

  // Use one of the accounts to deply the contract
  inbox = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode, arguments: [`hi there`] })
    .send({ from: accounts[0], gas: `1000000` });
});

/////////>>>>>>>>>> NOTE::: almost all the accounts on web3.eth module are asynchronous, means they return a promise

describe(`Inbox`, () => {
  it(`deploys a contract`, () => {
    assert.ok(inbox.options.address);
  });

  it(`should receive a default message`, async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, `hi there`);
  });

  it(`can change the address`, async () => {
    await inbox.methods.setMessage(`bye`).send({ from: accounts[0] }); ////// this will return a hash
    const message = await inbox.methods.message().call();
    assert.equal(message, `bye`);
  });
});

/* ================== SIMPLE EXAMPLE for how MOCHA works ================== */
// class Car {
//   park() {
//     return `stopped`;
//   }

//   drive() {
//     return `vroom`;
//   }
// }

// let car;

// beforeEach(() => {
//   car = new Car();
// });

// describe(`Car`, () => {
//   it(`should return a string as stopped`, () => {
//     assert.equal(car.park(), `stopped`);
//   });

//   it(`should return a string as vroom`, () => {
//     assert.equal(car.drive(), `vroom`);
//   });
// });
