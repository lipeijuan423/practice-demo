// const url = require('url');
// const myURL = url.parse('https://example.org/foo#bar');
// console.log(myURL.hash); //#bar

// myURL.hash = 'baz';
// console.log(myURL.href); //https://example.org/foo#baz
const myURL = new URL('/foo', 'https://example.org/');
console.log(myURL)