var fs = require('fs')

var cmudict = fs.readFileSync('cmudict.txt').toString().split("\n");

var output = 'word,syllables';

cmudict.forEach(function (line) {

  var match = line.match(/(^[A-Z]+[A-Z']*)\s\s((?:[A-Z0-9]+\s*)+)/);

  if (match) {
    var word = match[1]
    , phoneme = match[2]
    , syllables = phoneme.replace(/[^0-9]/g,"").length;

    output += ('\n' + word + ',' + syllables);

  }

});

fs.writeFileSync('cmudict-syllables.csv', output);
