import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "semantic-ui-react";

import Campaign from "../../../../ethereum/campaign";
import Layout from "../../../../components/Layout";

export default function RequestIndex({ requests, requestsCount }) {
  const router = useRouter();
  const { campaign: campaignAddress } = router.query;

  return (
    <Layout>
      <h3>Requests</h3>
      <Link href={`/campaigns/${campaignAddress}/requests/new`}>
        <a>
          <Button primary>Add Request</Button>
        </a>
      </Link>
    </Layout>
  );
}

RequestIndex.getInitialProps = async (context) => {
  const campaign = Campaign(context.query.campaign);
  const requestsCount = await campaign.methods.getRequestsCount().call();

  const requests = await Promise.all(
    Array(requestsCount)
      .fill()
      .map((element, index) => campaign.methods.requests(index).call())
  );

  return { requests, requestsCount };
};
