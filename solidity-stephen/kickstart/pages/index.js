import Link from "next/link";

import factory from "../ethereum/factory";
import { Button, Card } from "semantic-ui-react";
import Layout from "../components/Layout";

export default function Home({ campaigns }) {
  function renderCampaigns() {
    const items = campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link href={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }

  return (
    <Layout>
      <h3>Open Campaigns</h3>

      <Link href="/campaigns/new" passHref>
        <Button
          floated="right"
          content="Create Campaign"
          icon="add circle"
          primary
        />
      </Link>
      <div>{renderCampaigns()}</div>
    </Layout>
  );
}

Home.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();

  return { campaigns };
};
