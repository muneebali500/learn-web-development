const express = require(`express`);

const people = require(`./routes/people`);

const app = express();

app.use(express.static("./methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json data
app.use(express.json());

// app.get(`/`, (req, res) => {
//   res.send(
//     `<h1 style="color: red;">my products</h1> <a href="/api/products">take to products</a>`
//   );
// });

// app.get(`/api/products`, (req, res) => {
//   res.json(products);
// });

// app.get(`/api/v1/products`, (req, res) => {
//   const { search, limit } = req.query;
//   let sortedProducts = [...products];

//   if (search) {
//     sortedProducts = sortedProducts.filter((product) =>
//       product.name.startsWith(search)
//     );
//   }

//   if (limit) {
//     sortedProducts.length = parseInt(limit);
//   }

//   res.send(sortedProducts);
// });

app.use(`/api/people`, people);

app.listen(5000, () => {
  console.log(`server is listening at port 5000`);
});
