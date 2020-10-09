// File system
const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) throw err;
//   console.log('Папка создана')
// })

const filePath = path.join(__dirname, 'test', 'text.txt');

// fs.writeFile(filePath, 'Hello Node.js', err => {
//   if (err) throw err;
//   console.log("Файл создан 1");
// });
// fs.appendFile(filePath, '\nHello Again', err => {
//   if (err) throw err;
//   console.log("Файл создан 2");
// });

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) throw err;
  //   const data = Buffer.from(content);
  //   console.log('Content: ', data.toString());
  console.log(content)
})
