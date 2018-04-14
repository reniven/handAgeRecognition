

  var fs = require("fs");// define json file
  console.log("\n STARTING \n");

  // get content from file
  var content = fs.readFileSync("jsoncontent02.json");// change name of file
                                                    // if needed

  var jsonContent = JSON.parse(content);
  var content = jsonContent.images[0].classifiers[0].classes;
  var size = Object.keys(content).length;

  console.log("content size:", size);

  // sorting by confidence percent ascending and descending
  var ascending = content.sort((a, b) => Number(a["score"]) - Number(b["score"]));

  console.log("2nd greastest" , ascending[size-1]);

  console.log("\n EXIT \n");
