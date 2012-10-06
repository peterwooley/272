var fs = require('fs');

fs.readFile(__dirname + "/" + process.argv[2], function(err, data) {
  if(err) throw err;
  var rotated = rot13(data.toString());
  escaped = rotated.replace(/"/g, "\\\\\\\"");
  concat = "eval(\"var rot13 = "+rot13.toString() + ";eval(rot13(\\\""+escaped+"\\\"))\")";
  min = concat.replace(/[\n\r\t]/g, '');
  base64 = "eval(atob(\""+(new Buffer(min)).toString('base64')+"\"))";
  fs.writeFile(__dirname + "/" + process.argv[3], base64);
});

// http://stackoverflow.com/a/5353260/1245595 
function rot13(str) {
  return str.replace(/[a-zA-Z]/g, function(c) {
    return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
  });
}

