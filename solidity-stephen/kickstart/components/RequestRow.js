import React from "react";
import { Table, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";

import web3 from "../ethereum/web3";

export default function RequestRow({ id, request, address, approversCount }) {
  const { description, value, recipient, approvalCount } = request;
  const { Row, Cell } = Table;

  async function onApprove() {
    const campaign = Campaign(address);
    const accounts = await web3.eth.getAccounts();

    await campaign.methods.approveRequest(id).send({
      from: accounts[0],
    });
  }

  return (
    <Row>
      <Cell>{id}</Cell>
      <Cell>{description}</Cell>
      <Cell>{web3.utils.fromWei(value, `ether`)}</Cell>
      <Cell>{recipient}</Cell>
      <Cell>
        {approvalCount}/{approversCount}
      </Cell>
      <Cell>
        <Button color="green" basic onClick={onApprove}>
          Approve
        </Button>
      </Cell>
    </Row>
  );
}
