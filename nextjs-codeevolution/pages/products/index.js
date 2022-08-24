import React from "react";
import Link from "next/link";

export default function ProductsLis({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`} passHref>
            <h2>
              {product.id} {product.title}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  console.log(`generating / regenerating static props`);

  const response = await fetch(`http://localhost:4000/products`);
  const data = await response.json();

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
