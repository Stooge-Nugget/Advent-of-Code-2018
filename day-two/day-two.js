const reader = require('../file-reader');

reader.fileReader('input.txt', dayTwoPartTwo);

function dayTwoPartOne(inputData) {
    let twoTimes = 0;
    let threeTimes = 0;

    inputData.forEach(e => {
        let double = false;
        let triple = false;
        let charArray = e.split('');

        charArray.sort();

        for (const char of charArray) {
            let charCount = occurrences(char, charArray);

            if (!double && charCount === 2) {
                double = true;
                twoTimes++;
            }

            if (!triple && charCount === 3) {
                triple = true;
                threeTimes++;
            }

            if (double && triple) {
                break;
            }
        }
    });

    console.log('TWO:', twoTimes);
    console.log('THREE', threeTimes);
    console.log('RESULT:', twoTimes * threeTimes);
}

function occurrences(char, charArray) {
    let result = 0;

    for (let i = 0; i < charArray.length; i++) {
        if (char === charArray[i]) {
            result++;
        }
    }

    return result;
}

function dayTwoPartTwo(inputData) {

    for (let i = 0; i < inputData.length; i++) {

        for (let j = 0; j < inputData.length; j++) {
            let mismatchIndex = compareStrings(inputData[i], inputData[j]);

            if (mismatchIndex > -1) {
                console.log('STR1:', inputData[i]);
                console.log('STR2:', inputData[j]);
                console.log('COMMON LETTERS:', inputData[i].slice(0, mismatchIndex) + inputData[i].slice(mismatchIndex + 1));
            }
        }
    }
}

function compareStrings(str1, str2) {
    let mismatch = false;
    let mismatchPos = -1;

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            if (mismatch) return -1;
            mismatch = true;
            mismatchPos = i;
        }
    }

    return mismatchPos;
}