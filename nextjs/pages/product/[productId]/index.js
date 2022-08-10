import React from "react";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const { productId } = router.query;

  return <div>detalis about product {productId}</div>;
}
