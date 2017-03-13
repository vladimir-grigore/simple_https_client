var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response){

    //Set encoding to utf-8
    response.setEncoding('utf-8');

    response.on('data', function(chunk){
      console.log("%s \n", chunk);
    });
  });
}

getAndPrintHTMLChunks();