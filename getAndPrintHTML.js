var https = require('https');
//Create placeholder to store all the response
var data = '';

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response){

    //Set encoding to utf-8
    response.setEncoding('UTF8');

    //Print out the https response
    response.on('data', function(chunk){
      data += chunk;
    });

    //Handle error responses
    response.on('error', function(err){
      console.log("Error:", err.stack);
    });

    //Display all the data when reaching the end of the stream
    response.on('end', function(){
      console.log(data);
    });
  });
}

getAndPrintHTML();