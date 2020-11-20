const http = require("http");
const Router = require("./router");
const router = new Router();
const fs = require("fs").promises;

router.get("/some2/:name", (ctx) => {
  console.log("some path!");
  ctx.res.writeHead(200, { "Content-Type": "text/plain" });
  ctx.res.write(`${ctx.params.name}`);
  ctx.res.end();
});

// some/123/path/456
// some/antother_path/path/456
router.get("/some/:name", (ctx) => {
  console.log("some path!");
  ctx.res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./src/views/some_page.html", null).then((data) => {
    ctx.es.write(data);
    ctx.res.end();
  });
});

router.get("/some/:name", (ctx) => {
  console.log("some path!");
  ctx.res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./src/views/some_page.html", null).then((data) => {
    ctx.res.write(data);
    ctx.res.end();
  });
});

router.get("/", (ctx) => {
  console.log("base path");
  ctx.res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./src/views/base_page.html", null).then((data) => {
    ctx.res.write(data);
    ctx.res.end();
  });
});

const server = http.createServer(function (req, res) {
  const ctx = {
    req,
    res
  };
  router.eval(ctx);
});

server.listen(8080);
