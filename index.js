const fs = require('fs');

const a = fs.readFileSync('index.js', 'utf-8');
console.log(a);

fs.writeFileSync('index.js', 'console.log("Hello, world!");');

const b = fs.readFileSync('index.js', 'utf-8');
