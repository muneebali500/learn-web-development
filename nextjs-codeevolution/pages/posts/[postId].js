import React from "react";
// import { useRouter } from "next/router";

export default function Post({ post }) {
  // const router = useRouter();

  // if (router.isFallback) {
  //   return <h1>loading...</h1>;
  // }

  return (
    <div>
      <h3>
        {post.id} {post.title}
      </h3>
      <p>{post.body}</p>
    </div>
  );
}

export async function getStaticPaths() {
  // const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // const posts = await response.json();

  // const paths = posts.map((post) => {
  //   return {
  //     params: { postId: `${post.id}` },
  //   };
  // });

  // return {
  //   paths,
  //   fallback: false,
  // };

  return {
    paths: [
      {
        params: { postId: `1` },
      },
      {
        params: { postId: `2` },
      },
      {
        params: { postId: `3` },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}