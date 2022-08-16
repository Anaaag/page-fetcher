const request = require('request');
const fs = require('fs');

const arguments = process.argv.slice(2);
const url = arguments[0]
const file = arguments[1]

request(url, (error, response, body) => {

  if (error) {
    console.log("Error");
  }

  fs.writeFile('file', body, (err) => {

    if (err) {
      console.log("Cannot save file");
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]}bytes to ${file}`);
    }
  })


});