var https = require('https');

//Create placeholder to store all the response
var data = '';

module.exports = function getHTML (options, callback) {

  //* Add your code here */
  https.get(options, function(response){

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
      callback(data);
    });
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};