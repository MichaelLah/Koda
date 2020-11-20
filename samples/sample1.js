const fs = require("fs").promises;
const kado = require("../src/index");

const app = kado();

// import { App } from '../src/App.js'
// import Router from '../src/router.js'

// const router = App.router()

// const api = app()
// api.get()
// api.get()
// api.get()

// const admin = app()
// admin.post()
// admin.post()
// admin.get()

// app.get(() => {})
// app.get(
//   this._router ||= new Router()
//   this._router.get()
// app.mount('/admin', admin)
// app.mount('/api', api)

// app.serve(8000)

// // or

// const router = new Router();

// const api = new Router()
// api.get('')

// const app = new Router()
// app.get('')

// router.mount('/admin', admin)
// router.mount('/api', api)

// app.use(router)
// app.serve(8000)
// //
// app.start(router)
// //

app.get("/some2/:name", (ctx) => {
  console.log("some path!");
  ctx.res.writeHead(200, { "Content-Type": "text/plain" });
  ctx.res.write(`${ctx.params.name}`);
  ctx.res.end();
});

// some/123/path/456
// some/antother_path/path/456
app.get("/some/:name", (ctx) => {
  console.log("some path!");
  ctx.res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./src/views/some_page.html", null).then((data) => {
    ctx.es.write(data);
    ctx.res.end();
  });
});

app.get("/some/:name", (ctx) => {
  console.log("some path!");
  ctx.res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./src/views/some_page.html", null).then((data) => {
    ctx.res.write(data);
    ctx.res.end();
  });
});

app.get("/", (ctx) => {
  console.log("base path");
  ctx.res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./src/views/base_page.html", null).then((data) => {
    ctx.res.write(data);
    ctx.res.end();
  });
});

app.serve(8000);
