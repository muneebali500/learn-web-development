import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button, Table } from "semantic-ui-react";

import Campaign from "../../../../ethereum/campaign";
import Layout from "../../../../components/Layout";
import RequestRow from "../../../../components/RequestRow";

export default function RequestIndex({
  requests,
  requestsCount,
  approversCount,
}) {
  const router = useRouter();
  const { campaign: campaignAddress } = router.query;

  const { Header, Row, HeaderCell, Body } = Table;

  return (
    <Layout>
      <h3>Requests</h3>
      <Link href={`/campaigns/${campaignAddress}/requests/new`}>
        <a>
          <Button primary floated="right" style={{ marginBottom: 10 }}>
            Add Request
          </Button>
        </a>
      </Link>

      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>

        <Body>
          {requests.map((request, index) => (
            <RequestRow
              key={index}
              id={index}
              request={request}
              address={campaignAddress}
              approversCount={approversCount}
            />
          ))}
        </Body>
      </Table>
      <div>Found {requestsCount} requests</div>
    </Layout>
  );
}

RequestIndex.getInitialProps = async (context) => {
  const campaign = Campaign(context.query.campaign);
  const requestsCount = await campaign.methods.getRequestsCount().call();
  const approversCount = await campaign.methods.approversCount().call();

  const requests = await Promise.all(
    Array(requestsCount)
      .fill()
      .map((element, index) => campaign.methods.requests(index).call())
  );

  return { requests, requestsCount, approversCount };
};
