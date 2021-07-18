/*
 * Next.js Cloud Code Example
 */

const express = require("express");
const app = express();

const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextJS = next({ dev });
const handle = nextJS.getRequestHandler();

app.get("/hello_craft", (req, res) => {
  res.send("Hello from Craft's Cloud Code");
});

nextJS
  .prepare()
  .then(() => {
    app.get(/^(?!(\/1))/, (req, res) => {
      return handle(req, res);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
  });

/*
 * Exporting of module.exports.app is required.
 * we mount it automatically to the Parse Server Deployment.
 */

module.exports = app;
