

  var fs = require("fs");// define json file
  console.log("\n STARTING \n");

  // get content from file
  var content = fs.readFileSync("jsoncontent02.json");// change name of file
                                                    // if needed

  var jsonContent = JSON.parse(content);
  var content = jsonContent.images[0].classifiers[0].classes;
  var size = Object.keys(content).length;
  /*debug
     console.log(jsonContent.images[0].classifiers[0].classes);
  console.log(jsonContent);
  console.log(jsonContent.images[0].classifiers[0].classes);
  console.log(content["score"]);
  */

  console.log("content size:", size);

  // sorting by confidence percent ascending and descending
  var ascending = content.sort((a, b) => Number(a["score"]) - Number(b["score"]));

  console.log("2nd greastest" , ascending[size-1]);


  /*DEBUG:
   console.log(jsonContent.images[0].classifiers[0].classes[0]);
     var descending = content.sort((a, b) => Number(b["score"]) - Number(a["score"]));

  console.log(descending[2]);
  */
  console.log("\n EXIT \n");
