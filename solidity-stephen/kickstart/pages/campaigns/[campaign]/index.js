import Link from "next/link";
import { Button, Card, Grid } from "semantic-ui-react";

import Campaign from "../../../ethereum/campaign";
import Layout from "../../../components/Layout";
import web3 from "../../../ethereum/web3";
import ContributeForm from "../../../components/ContributeForm";

export default function campaign(props) {
  const {
    campaignAddress,
    minimumContribution,
    balance,
    requestsCount,
    approversCount,
    manager,
  } = props;

  function renderCards() {
    const items = [
      {
        header: manager,
        meta: `Address of a Manager`,
        description: `The manager has created the campaign and can request to withdraw money`,
        style: { overflowWrap: `break-word` },
      },
      {
        header: minimumContribution,
        meta: `Minimum Contribution (wei)`,
        description: `You must contribute at least this much wei to become a approver`,
      },
      {
        header: requestsCount,
        meta: `Number of Requests`,
        description: `A request to withdraw money from the contract. Requests must be approved by approvers`,
      },
      {
        header: approversCount,
        meta: `Number of Approvers`,
        description: `Number of people who have already donated to this campaign`,
      },
      {
        header: web3.utils.fromWei(balance, `ether`),
        meta: `Campaign Balance (ether)`,
        description: `How much money this campaign has left to spend`,
      },
    ];

    return <Card.Group items={items} />;
  }

  return (
    <Layout>
      <h1>Campaign Details</h1>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>{renderCards()}</Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={campaignAddress} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Link href={`/campaigns/${campaignAddress}/requests`} passHref>
              <Button primary> View Requests</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
}

campaign.getInitialProps = async (context) => {
  const campaign = Campaign(context.query.campaign);

  const summary = await campaign.methods.getSummary().call();

  return {
    campaignAddress: context.query.campaign,
    minimumContribution: summary[0],
    balance: summary[1],
    requestsCount: summary[2],
    approversCount: summary[3],
    manager: summary[4],
  };
};
