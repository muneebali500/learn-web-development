import React from "react";

export default function NewsArticles({ articles }) {
  return (
    <div>
      <h1>This is news articles page</h1>

      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} - {article.description} | {article.category}
          </h2>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  console.log(`pre-rendering news articles`);

  return {
    props: {
      articles: data,
    },
  };
}
