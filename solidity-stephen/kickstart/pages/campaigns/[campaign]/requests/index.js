import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "semantic-ui-react";

import Layout from "../../../../components/Layout";

export default function RequestIndex() {
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

// RequestIndex.getInitialProps = (context) => {
//   const { campaign } = context.query;

//   return { address: campaign };
// };
