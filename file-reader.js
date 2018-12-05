const fs = require('fs');
const readline = require('readline');

module.exports = {
    fileReader: function (fileName, delegate) {
        let input = [];
        let lineReader = readline.createInterface(fs.createReadStream(fileName));

        lineReader.on('line', line => input.push(line));
        lineReader.on('close', () => delegate(input));
    }
}