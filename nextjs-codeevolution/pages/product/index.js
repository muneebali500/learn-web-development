import React from "react";
import Link from "next/link";

export default function Product({ productId = 400 }) {
  return (
    <div>
      <ul>
        <Link href="/">
          <a>home</a>
        </Link>

        <br />

        <Link href="/product/1">
          <a>product 1</a>
        </Link>

        <br />

        <Link href="/product/2" replace>
          <a>product 2</a>
        </Link>

        <br />

        <Link href={`/product/${productId}`}>
          <a>product 3</a>
        </Link>

        <li>product 4</li>
      </ul>
    </div>
  );
}
