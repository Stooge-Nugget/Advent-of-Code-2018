const reader = require('../file-reader');

reader.fileReader('day-one/input.txt', dayOnePartOne);

function dayOnePartOne(inputArray) {
    let result = 0;

    inputArray.forEach(e => {
        result += parseInt(e, 10);
    });

    console.log('RESULT:', result);
}

function dayOnePartTwo(inputArray) {
    let currentResult = 0;
    let prevResults = [];
    let duplicateFound = false;
    let index = 0;
    let inputLength = inputArray.length;

    prevResults.push(currentResult);

    while (!duplicateFound) {

        currentResult += parseInt(inputArray[index], 10);

        if (prevResults.findIndex(n => n === currentResult) > -1) {
            duplicateFound = true;
        }

        prevResults.push(currentResult);
        index++;

        if (index === inputLength) {
            index = 0;
        }

        console.log('CURRENT:', currentResult);
    }

    console.log('MATCH:', currentResult);
}