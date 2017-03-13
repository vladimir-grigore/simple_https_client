var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function print_reverse (html) {
  html = html.split("").reverse().join("");
  console.log(html);
}

getHTML(requestOptions, print_reverse);