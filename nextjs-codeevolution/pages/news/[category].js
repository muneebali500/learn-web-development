import React from "react";

export default function NewsArtilcesCategory({ articles, category }) {
  return (
    <div>
      <h2 id="head">News Articles Category List</h2>
      <button onClick={() => setHead(true)}>change heading</button>

      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} - {article.description}
          </h2>
          <p>{category}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  const { category } = params;

  // console.log(params);
  // console.log(query);
  // console.log(req.headers.cookie);
  // res.setHeader("Set-Cookie", ["name=Muneeb"]);

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  console.log(`pre-rendering news articles for category ${category}`);

  return {
    props: {
      articles: data,
      category,
    },
  };
}
