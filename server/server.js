// server.js
const express = require("express");
const path = require("path");
const fs = require("fs");
const serveStatic = require("serve-static");
const helmet = require("helmet");

const app = express();
app.disable("x-powered-by");
app.use(helmet({
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      "script-src": ["'self'", "'unsafe-inline'"]
    }
  },
  crossOriginEmbedderPolicy: true,
  crossOriginOpenerPolicy: true,
  crossOriginResourcePolicy: true,
  hsts: {
    includeSubDomains: false
  },
  originAgentCluster: true
}));

app.use(serveStatic(__dirname + "/public/assets"));

function page(file) {
  return path.join(__dirname + "/public/pages/", file);
}

function servePage(url, file) {
  app
      .route([ url ])
      .get((req, res) => {
        res.sendFile(page(file));
      });
}

app.route([
  '/'
]).get((req, res) => {
  res.sendFile(page("index.html"));
})

servePage('/', 'index.html')
/** Blog */
/** =================================== */
servePage('/research', 'research.html');
/** Projects */
/** =================================== */
servePage('/gallery', 'gallery.html');

// Fallback Catch All
app.route('/*').get(function(req, res) {
    res.redirect(302, "/");
});

var port = process.env.PORT || 8003;
var host = '0.0.0.0';
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});