import { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

export default function New() {
  const [minimumContribution, setMinimunContribution] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();

    const accounts = await web3.eth.getAccounts();
    await factory.methods.createCampaign(minimumContribution).send({
      from: accounts[0],
    });
    // metamask will automatically try to calculate the amount of gas to send with the transaction so we dont need to enter here
  }

  return (
    <Layout>
      <h3>Create a Campaign</h3>

      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label="wei"
            labelPosition="right"
            value={minimumContribution}
            onChange={(e) => setMinimunContribution(e.target.value)}
          />
        </Form.Field>

        <Button primary>Create!</Button>
      </Form>
    </Layout>
  );
}
