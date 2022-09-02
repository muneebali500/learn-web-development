import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import factory from "../../ethereum/factory";
import Layout from "../../components/Layout";

export default function campaign({ campaigns }) {
  const router = useRouter();
  const { query } = router;

  const campaign = campaigns.find((address) => address === query.campaign);

  return (
    <Layout>
      <h1>{campaign}</h1>
    </Layout>
  );
}

campaign.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();

  return { campaigns };
};
