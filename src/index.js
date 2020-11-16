const http = require("http");
const Router = require("./router");
const router = new Router();
const fs = require("fs").promises;

router.get("/some/path", (req, res) => {
  console.log("some path!");
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./src/views/some_page.html", null).then((data) => {
    res.write(data);
    res.end();
  });
});

router.get("/", (req, res) => {
  console.log("base path");
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./src/views/base_page.html", null).then((data) => {
    res.write(data);
    res.end();
  });
});

const server = http.createServer(function (req, res) {
  router.eval(req, res);
  // res.end();
});

server.listen(8080);

/*
router
  .get('/', (req, res) => {
    res.send('Hello World!')
  })
  .get('/hello', (req, res) => {
  })
*/
