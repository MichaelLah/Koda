const fs = require("fs").promises;
// const fs = require("fs");

class Router {
  // handers = [];

  constructor() {
    this.routes = {};
  }

  get(path, handler) {
    this._set_route(`GET:${path}`, handler);
  }
  post(path, handler) {
    this._set_route(`POST:${path}`, handler);
  }
  put(path, handler) {
    this._set_route(`PUT:${path}`, handler);
  }
  delete(path, handler) {
    this._set_route(`DELETE:${path}`, handler);
  }

  eval(req, res) {
    const { url, method } = req;
    if (!this.routes[`${method}:${url}`]) {
      this.notFound(req, res);
      return;
    }
    this.routes[`${method}:${url}`](req, res);

    // x[`${req.method}:${req.url}`];
    //
    // x[`${req.method}:${req.url}`](req, res);

    // if (req.method == "GET" && req.url == "/") {
    //   res.write("GET /");
    // } else {
    //   res.write("welcome to kado hello!");
    // }
  }

  _set_route(path, handler) {
    this.routes[path] = handler;
  }

  notFound(req, res) {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.readFile("./src/404.html", null).then((data) => {
      res.write(data);
      res.end();
    });
  }
}

module.exports = Router;

/*
const x = [
      [
        "GET:/", function() {
          [
            "GET:/test", function() {
              [
                "GET:/test/route", function() {},
              ]
            },
          ]
        },
        "GET:/someRoute", function() {},
      ],
      [
        "POST:/", function() {},
      ]
    ];

*/
