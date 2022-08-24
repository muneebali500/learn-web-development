import React from "react";

import { useRouter } from "next/router";

export default function id() {
  const router = useRouter();
  const { productId, slug } = router.query;

  return (
    <div>
      id - {productId} from - {slug}
    </div>
  );
}
