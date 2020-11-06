var http = require("http");
var Router = require("./router");

var router = new Router();
console.log(router);

const server = http.createServer(function (req, res) {
  router.eval(req, res);
  res.end();
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
