import React, { useState } from "react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { useRouter } from "next/router";

import { Button, Form, Input, Message } from "semantic-ui-react";

export default function ContributeForm({ address }) {
  const router = useRouter();

  const [value, setValue] = useState(``);
  const [errorMessage, setErrorMessage] = useState(``);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();

    const campaign = Campaign(address);

    setLoading(true);
    setErrorMessage(``);

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(value, `ether`),
      });

      router.reload();
    } catch (err) {
      setErrorMessage(err.message);
    }

    setLoading(false);
    setValue(``);
  }

  return (
    <Form onSubmit={onSubmit} error={!!errorMessage}>
      <Form.Field>
        <label>Amount to Contribute</label>
        <Input
          label="ether"
          labelPosition="right"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Field>

      <Message error header="Oops!" content={errorMessage} />
      <Button primary loading={loading}>
        Contribute!
      </Button>
    </Form>
  );
}
