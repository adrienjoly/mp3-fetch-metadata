var acoustid = require("acoustid");

var ACOUSTID_KEY = 'LDQ85owieZ';

var file = process.argv[2];

function callback(err, results) {
  var output;
  try {
    output = {
      title: results[0].recordings[0].title,
      artist: results[0].recordings[0].artists[0].name,
    };
  } catch(exc) {
    output = { error: 'No metadata was returned for this track.' };
  };
  console.log(JSON.stringify(err ? { error: err.message } : output));
}

if (!file) {
  callback({ message: 'Missing argument: MP3 file name.' });
} else {
  acoustid(file, { key: ACOUSTID_KEY}, callback);
}
