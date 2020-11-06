class Router {
  // handers = [];

  eval(req, res) {
    const x = {
      "GET:/": function (req, res) {
        res.write(`${req.method}:${req.url}`);
      },
    };

    x[`${req.method}:${req.url}`];

    x[`${req.method}:${req.url}`](req, res);

    // if (req.method == "GET" && req.url == "/") {
    //   res.write("GET /");
    // } else {
    //   res.write("welcome to kado hello!");
    // }
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
