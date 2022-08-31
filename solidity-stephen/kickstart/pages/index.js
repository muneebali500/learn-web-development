import factory from "../ethereum/factory";
import { Button, Card } from "semantic-ui-react";
import Layout from "../components/Layout";

export default function Home({ campaigns }) {
  function renderCampaigns() {
    const items = campaigns.map((address) => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }

  return (
    <Layout>
      <h3>Open Campaigns</h3>

      <Button
        floated="right"
        content="Create Campaign"
        icon="add circle"
        primary
      />
      <div>{renderCampaigns()}</div>
    </Layout>
  );
}

Home.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();

  return { campaigns };
};
