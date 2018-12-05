const reader = require('../file-reader');

reader.fileReader('input.txt', dayFivePartTwo);

function dayFivePartOne(input) {
    collapsedLength(input);
}

function dayFivePartTwo(input) {
    let charArray = input[0].split('');
    let results = [];

    for (let i = 0; i < 26; i++) {
        let filteredData = charArray.slice().filter(l => l.toLowerCase() !== (i+10).toString(36));
        results[i] = collapsedLength(filteredData);
    }

    let valueOfMin = Math.min(...results);
    let letter = results.indexOf(valueOfMin);

    console.log('MIN:', valueOfMin);
    console.log('LETTER:', (letter+10).toString(36));
}

function collapsedLength(charArray) {
    let index = 1;

    while (index < charArray.length) {
        let prev = index - 1;

        if (charArray[prev].toLowerCase() === charArray[index].toLowerCase() &&
            charArray[prev] !== charArray[index]) {
            charArray.splice(prev, 2)
            if (prev !== 0) index--
        } else {
            index++;
        }
    }

    // console.log(charArray.length);
    return charArray.length;
}