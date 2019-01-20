const express = require("express");
const next = require("next");
const redirects = require("./redirects");
const api = require("./api");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use("/api", api);

  redirects.forEach(({ from, to, type = 301, method = "get" }) => {
    server[method](from, (req, res) => {
      res.redirect(type, to);
    });
  });

  server.get("*", (req, res) => {
    // remove trailing slashes unless it's home
    // fixes the /baltimore => a page vs /baltimore/ => 404 bug
    req.url = req.url.replace(/\/$/, "");
    if (req.url == "") {
      req.url = "/";
    }
    return handler(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`App running on http://localhost:${port}`);
  });
});
