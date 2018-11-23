const express = require("express");
const next = require("next");
const redirects = require("./redirects");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  redirects.forEach(({ from, to, type = 301, method = "get" }) => {
    server[method](from, (req, res) => {
      res.redirect(type, to);
    });
  });

  server.get("/api/health", (req, res) => {
    return res.send("express.js running");
  });

  server.get("*", (req, res) => {
    return handler(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`App running on http://localhost:${port}`);
  });
});
