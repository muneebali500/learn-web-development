import "semantic-ui-css/semantic.min.css";

import factory from "../ethereum/factory";
import { Button, Card } from "semantic-ui-react";

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
    <div>
      <div>{renderCampaigns()}</div>
      <Button content="Create Campaign" icon="add circle" primary />
    </div>
  );
}

Home.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();

  return { campaigns };
};
