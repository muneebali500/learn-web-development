import { useState, useEffect } from "react";
import web3 from "./web3";
import lottery from "./lottery";

function App() {
  const [data, setData] = useState({
    manager: ``,
    players: [],
    balance: ``,
    value: ``,
    message: ``,
  });

  useEffect(() => {
    async function fetchData() {
      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);

      setData({ manager, players, balance });
    }

    fetchData();
  }, []);

  async function onSubmit(e) {
    e.preventDefault();

    const accounts = web3.eth.getAccounts();

    setData({ ...data, message: `Waiting on transaction success...` });

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(data.value, "ether"),
    });

    setData({ ...data, message: `You have been entered` });
  }

  async function pickWinner() {
    const accounts = web3.eth.getAccounts();

    setData({ ...data, message: `Waiting on transaction success...` });

    await lottery.methods.pickWinner().send({
      from: accounts[0],
    });

    setData({ ...data, message: `A winner has been picked` });
  }

  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>This contract is managed by {data.manager}</p>
      <p>
        There are currently {data.players.length} people entered, competing to
        win {web3.utils.fromWei(data.balance, "ether")} ether!
      </p>

      <hr />

      <h3>Want to try your luck?</h3>
      <form onSubmit={onSubmit}>
        <label>
          Amount of ether to enter{" "}
          <input
            onChange={(e) => setData({ ...data, value: e.target.value })}
            type="text"
            value={data.value}
          />
        </label>
        <button>Enter</button>
      </form>

      <hr />

      <h3>Time to pick a winner?</h3>
      <button onClick={pickWinner}>Pick Winner</button>

      <hr />
      <h3>{data.message}</h3>
    </div>
  );
}

export default App;
