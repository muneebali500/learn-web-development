const http = require("http");

const server = http.createServer((req, res) => {
  //   res.write(`welcome to home page`);
  //   res.end();

  if (req.url === `/`) {
    return res.end(`welcome to home page`);
  }

  if (req.url === `/about`) {
    return res.end(`welcome to about page`);
  }

  res.write(`
    <h2>Oooops!</h2>
    <p>The page you are looking for is not available</p>
    <a href="/">go back</a>
  `);

  res.end();
});

server.listen(5000);
