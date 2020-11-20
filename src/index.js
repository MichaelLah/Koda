const http = require("http");
const Router = require("./router");

const router = new Router();

//Todo: make a class
const server = http.createServer(function (req, res) {
  const ctx = {
    req,
    res
  };
  router.eval(ctx);
});

const app = {
  _router: router,
  _server: server,
  // TODO: switch to useing `new Proxy(target, handler1);`
  get: (path, handler) => router.get(path, handler),
  serve: (port) => server.listen(port)
};

module.exports = () => {
  return app;
};
