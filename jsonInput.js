

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

  //get the 2nd greatest
  console.log("2nd greastest" , ascending[size-1]);

  var str = ascending[size-1];
  var n = str.length;

  /*Final result*/
  var res = str.substring(n-2, n);// this return the age


  console.log("strlen: ", n);
  console.log("subString: ",res);

  console.log("\n EXIT \n");
