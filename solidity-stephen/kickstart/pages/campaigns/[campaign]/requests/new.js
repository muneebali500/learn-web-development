import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button, Input, Form } from "semantic-ui-react";

import Layout from "../../../../components/Layout";
import web3 from "../../../../ethereum/web3";
import Campaign from "../../../../ethereum/campaign";

export default function NewRequest() {
  const router = useRouter();
  const { campaign: campaignAddress } = router.query;

  const [description, setDescription] = useState(``);
  const [value, setValue] = useState(``);
  const [recipient, setRecipient] = useState(``);

  async function onSubmit(e) {
    e.preventDefault();

    const campaign = Campaign(campaignAddress);

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, `ether`), recipient)
        .send({ from: accounts[0] });
    } catch (err) {}
  }

  return (
    <Layout>
      <h3>Create a Request</h3>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Description</label>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Amount in ether</label>
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
        </Form.Field>

        <Form.Field>
          <label>Recipient</label>
          <Input
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </Form.Field>

        <Button primary>Create!</Button>
      </Form>
    </Layout>
  );
}
