import React, { useState, useEffect } from "react";
import { getSession, signIn } from "next-auth/client";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function securePage() {
      const session = await getSession();

      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    }
    securePage();
  }, []);

  if (loading) {
    return <h2>loading...</h2>;
  }

  return <div>dashboard</div>;
}
