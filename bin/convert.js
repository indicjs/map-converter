var System = require('jspm');

System.import('lib/converter').then(function(converter) {
  if (2 in process.argv) {
    var infile = process.argv[2];
  } else {
    console.log("Make sure you give the filename to convert as a command line argument");
  }
  var map = converter.getJSONMap(infile);
  console.log(JSON.stringify(map, null, 2));
});
