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

    //Print out the https response
    response.on('data', function(chunk){
      console.log("%s \n", chunk);
    });

    //Handle error responses
    response.on('error', function(err){
      console.log("Error:", err.stack);
    });

    //Mark the end of the stream
    response.on('end', function(){
      console.log("Reached the end of the stream.");
    });
  });
}

getAndPrintHTMLChunks();