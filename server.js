const http = require('http');
const fs = require('fs');
const path = require('path');
const xml = fs.readFileSync(path.join(__dirname, 'leber-301-recrawl-sitemap.xml'));
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/xml; charset=utf-8' });
  res.end(xml);
}).listen(process.env.PORT || 3000);
