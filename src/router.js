const fs = require("fs").promises;
const { pathToRegexp, match, parse, compile, exec } = require("path-to-regexp");
// const fs = require("fs");

class Router {
  // handers = [];

  constructor() {
    this.routes = {};
    this.routes["GET"] = new Map();
    this.routes["POST"] = new Map();
    this.routes["PUT"] = new Map();
    this.routes["DELETE"] = new Map();
  }

  get(path, handler) {
    this._set_route("GET", path, handler);
  }
  post(path, handler) {
    this._set_route("POST", path, handler);
  }
  put(path, handler) {
    this._set_route("PUT", path, handler);
  }
  delete(path, handler) {
    this._set_route("DELETE", path, handler);
  }

  eval(ctx) {
    const { url, method } = ctx.req;
    if (!this.routes[method]) {
      this.notFound(ctx);
      return;
    }
    // if (!this.routes[method])
    for (let key of this.routes[method].keys()) {
      // for (let key in this.routes[method]) {
      console.log("eval");
      console.log(typeof key);
      const matched = key(url);
      if (matched) {
        ctx.params = matched.params;
        this.routes[method].get(key)(ctx);
      }
    }
  }

  _set_route(method, path, handler) {
    // const route = pathToRegexp(path);
    const route = match(path, { deocde: decodeURIComponent });
    console.log(route);
    // console.log(typeof route);
    // console.log(route.exec("/"));
    // d = {};
    // d[route] = "one";
    // d;
    this.routes[method].set(route, handler);
  }

  notFound(ctx) {
    ctx.res.writeHead(404, { "Content-Type": "text/html" });
    fs.readFile("./src/404.html", null).then((data) => {
      ctx.res.write(data);
      ctx.res.end();
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
