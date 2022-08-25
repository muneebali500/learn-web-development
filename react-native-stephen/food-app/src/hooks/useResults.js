import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default function useResults() {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(``);

  // console.log({ results });

  async function searchApi(term) {
    try {
      const response = await yelp.get(`/search`, {
        params: {
          limit: 50,
          term,
          location: `new york`,
        },
      });

      // console.log(response.data.businesses);
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage(`something went wrong`);
    }
  }

  useEffect(() => {
    searchApi(`fish`);
  }, []);

  return [searchApi, results, errorMessage];
}
