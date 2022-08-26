import factory from "../ethereum/factory";

export default function Home({ campaigns }) {
  return <div>{campaigns[0]}</div>;
}

Home.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();

  return { campaigns };
};
