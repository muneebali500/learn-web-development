const http = require(`http`);

const server = http.createServer((req, res) => {
  if (req.url === `/`) {
    return res.end(`home page`);
  }

  if (req.url === `/about`) {
    /// blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} and ${j}`);
      }
    }

    return res.end(`about page`);
  }

  return res.end(`error page`);
});

server.listen(5000, () => {
  console.log(`server is listening at port 5000`);
});
