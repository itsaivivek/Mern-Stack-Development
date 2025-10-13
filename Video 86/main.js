/* Only works for "type": "commonjs" */
// const { createServer } = require('node:http');
// const fs = require("fs");

// import {createServer} from "http" // Works when "type": "module"

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// //Impoting Named export
// import {a, b, d} from "./mymodule.js"
// console.log(a, b, d)

// // Importing default export
// import vivek from "./mymodule.js"
// console.log(vivek)

// (function(expotrs, require, module, __filename, __dirname) {
//     // Module code actually lives here
// });

const a = require("./mymodule2.js");
console.log(a, __dirname, __filename);
