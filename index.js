const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);
  if (!ext) {
    filePath += '.html';
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile( path.join(__dirname, 'public', '404.html'), (error, dataError) => {
        if (error) {
          res.writeHead(500);
          res.end('Error');
        }
        res.writeHead(200, {
          "Content-type": "text/html"
        });
        res.end(dataError);
      });
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(data);
    }
    
  });

});

server.listen(3000, () => {
  console.log('Server has been started...');
});
