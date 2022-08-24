import React from "react";
import { useRouter } from "next/router";

export default function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <h3>
        {product.id} {product.title} {product.price}
      </h3>
      <p>{product.description}</p>
    </div>
  );
}

export async function getStaticPaths() {
  // const response = await fetch(`https://jsonplaceholder.typicode.com/products`);
  // const products = await response.json();

  // const paths = products.map((product) => {
  //   return {
  //     params: { productId: `${product.id}` },
  //   };
  // });

  // return {
  //   paths,
  //   fallback: false,
  // };

  return {
    paths: [
      {
        params: { productId: `1` },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();

  // if (!data.id) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      product: data,
    },
  };
}
